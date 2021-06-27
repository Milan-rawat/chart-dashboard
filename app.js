const path = require("path");
const express = require("express");
const cors = require("cors");
const compression = require("compression");

const dataRouter = require("./routes/dataRoute");

// Start express app
const app = express();

// Implementing CORS
app.use(cors());

// Serving static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client/build")));

// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(compression());

// Routes

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use("/api/jsondata", dataRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
