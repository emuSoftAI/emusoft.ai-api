const express = require("express");
const cors = require("cors");
const compression = require("compression");
const expressRateLimit = require("express-rate-limit");
const expressMongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const hpp = require("hpp");
const xssClean = require("xss-clean");
const userRoutes = require("./routes/userRoutes");
const activityRoutes = require("./routes/activityRoutes");
const errorController = require("./controllers/errorController");

// * Call Express
const app = express();

// * CORS configuration
const allowedOrigins = ["http://localhost:3000", "https://emusoft.ai"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) callback(null, true);
      else callback(new Error("Not allowed by CORS!"));
    },
  })
);

// * API Limit
const limit = expressRateLimit({
  max: 100,
  windowsMs: 60 * 60 * 1000,
  message: "Too many requests.",
  standartHeaders: true,
  legacyHeaders: false,
});

app.use(express.json({ limit }));

// * Security
app.use(expressMongoSanitize()); // Block NoSQL Injection, disable { } query
app.use(helmet()); // Block XSS attacks, disable HTTP, force HTTP(S)
app.use(hpp()); // Block HTTP parameter pollution attacks
app.use(xssClean()); // Block malicious scripts

// * Routes
app.get(
  "/",
  (req, res) =>
    res.status(200).json({
      status: "success",
      message: "Welcome to the EMUSOFT.AI API",
    })

  //   res.redirect("https://emusoft.ai")
);

app.use("/users", userRoutes);
app.use("/activities", activityRoutes);

// * In production/deployment
// app.use(compression());

// * Global error handling
app.use(errorController);

module.exports = app;
