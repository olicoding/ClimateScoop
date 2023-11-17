require("dotenv").config({ path: "./.env.local" });

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const logger = require("./winston");

const app = express();
const port = process.env.API_PORT || 3001;
const baseUrl = process.env.AUTH0_BASE_URL;
const issuerBaseUrl = process.env.AUTH0_ISSUER_BASE_URL;
const audience = process.env.AUTH0_AUDIENCE;
const mongodbDataApiUrl = process.env.MONGODB_DATA_API_URL;

if (!baseUrl || !issuerBaseUrl || !audience || !mongodbDataApiUrl) {
  logger.error(`Missing required environment variable`);
  process.exit(1);
}

app.use((req, res, next) => {
  res.on("finish", () => {
    logger.info(
      `${req.method} ${req.originalUrl} - ${res.statusCode}; ${
        res.get("Content-Length") || 0
      }b sent`
    );
  });
  next();
});

app.use(helmet());
app.use(cors({ origin: [baseUrl, mongodbDataApiUrl] }));

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuerBaseUrl}/.well-known/jwks.json`,
  }),
  audience,
  issuer: `${issuerBaseUrl}/`,
  algorithms: ["RS256"],
});

app.get("/api/shows", checkJwt, (req, res) => {
  logger.info("Access to /api/shows endpoint");
  res.send({
    msg: "Your access token was successfully validated!",
  });
});

app.use((err, req, res) => {
  logger.error(`Error: ${err.stack || err.message}`);
  res.status(500).send("Internal Server Error");
});

const server = app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});

process.on("SIGINT", () => {
  logger.info("Shutting down server...");
  server.close(() => {
    logger.info("Server shut down.");
  });
});
