const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const logger = require("./utils/AppLog");
// * Create server
const server = http.createServer(app);

// ! Uncaught Exception Error
process.on("uncaughtException", (err) => {
  console.error(err.name);
  console.error(err.message);

  server.close(() => process.exit(1));
});

// * Configuration
dotenv.config({ path: "./config.env" });

// * Database connection
(async () => {
  try {
    await mongoose.connect(process.env.URI_DEVOPS);
    logger.info("Database connection is stable.");

    
    
  } catch (e) {
    logger.error(`Database connection error: ${e}`);
  }
})();

server.listen(process.env.PORT, () =>
  logger.info(`Server started with http://localhost:${process.env.PORT}/`)
);

// ! Unhandled Rejection Error
process.on("unhandledRejection", (err) => {
  logger.error(`${err.name}`)
  logger.error(`${err.message}`)
  server.close(() => process.exit(1));
});
