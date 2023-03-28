require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

module.exports = app;