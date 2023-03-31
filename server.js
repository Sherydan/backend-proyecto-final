require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// app.use(express.json());
app.use(cors());
app.use(express.json());

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => console.log(`Server running on port ${app.get("port")}`));

module.exports = app;