const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

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
// (async () => {
//   try {
//     await mongoose.connect(process.env.URI);
//     console.log("Connection to the database successful.");
//   } catch (e) {
//     console.error(`Connection to the database is failed. ${e}`);
//   }
// })();

server.listen(process.env.PORT, () =>
  console.log(`Server is running on PORT: ${process.env.PORT}`)
);

// ! Unhandled Rejection Error
process.on("unhandledRejection", (err) => {
  console.error(err.name);
  console.error(err.message);

  server.close(() => process.exit(1));
});
