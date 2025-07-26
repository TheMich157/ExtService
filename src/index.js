// src/index.js
require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("./utils/logger");
const apiKeyCheck = require("./middleware/apiKeyCheck");
const userRoutes = require("./routes/userRoutes");
require("./config/db");

const app = express();

app.use(helmet());
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(apiKeyCheck);
app.use("/api", userRoutes);

app.get("/api/ping", (req, res) => res.json({ pong: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server listening on port", PORT));
