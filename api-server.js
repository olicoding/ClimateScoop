require("dotenv").config({ path: "./.env.local" });

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const logger = require("./lib/winston");

const app = express();
const port = process.env.API_PORT || 3001;
const baseUrl = process.env.AUTH0_BASE_URL;
const issuerBaseUrl = process.env.AUTH0_ISSUER_BASE_URL;
const audience = process.env.AUTH0_AUDIENCE;

if (!baseUrl || !issuerBaseUrl || !audience) {
  logger.error("Missing a required environment variable");
  process.exit(1);
}

app.use(helmet());
app.use(cors({ origin: baseUrl }));

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

app.use((req, res, next) => {
  res.on("finish", () => {
    logger.info({
      message: `${req.method} ${req.originalUrl} - ${res.statusCode}; ${
        res.get("Content-Length") || 0
      }b sent`,
    });
  });
  next();
});

app.get("/api/admin", checkJwt, (req, res) => {
  logger.info("Admin route is secured...");
  res.send("Admin route is secured");
});

app.use((err, req, res) => {
  if (err.name === "UnauthorizedError") {
    logger.warn(`Unauthorized access attempt: ${err.message}`);
  } else {
    logger.error({
      message: `Error: ${err.stack || err.message}`,
      request: {
        method: req.method,
        url: req.originalUrl,
        headers: req.headers,
      },
    });
  }
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
