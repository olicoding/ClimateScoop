// const winston = require("winston");

// const logFormat = winston.format.combine(
//   winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
//   winston.format.json(),
//   winston.format.printf(
//     (info) => `${info.timestamp} ${info.level}: ${info.message}`
//   )
// );

// const logger = winston.createLogger({
//   level: process.env.LOCAL_ENV === "dev" ? "debug" : "info",
//   format: logFormat,
//   defaultMeta: { service: "user-service" },
//   transports: [
//     new winston.transports.File({
//       filename: "lib/winston/combined/combined.log",
//     }),
//     new winston.transports.File({
//       filename: "lib/winston/logs/error.log",
//       level: "error",
//     }),
//     new winston.transports.File({
//       filename: "lib/winston/logs/exceptions.log",
//       handleExceptions: true,
//       level: "error",
//     }),
//     new winston.transports.File({
//       filename: "lib/winston/logs/rejections.log",
//       handleRejections: true,
//       level: "error",
//     }),
//   ],
// });

// if (process.env.LOCAL_ENV === "dev") {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.simple()
//       ),
//     })
//   );
// }

// module.exports = logger;
