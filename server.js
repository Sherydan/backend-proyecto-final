const express = require("express");
const app = express();
const cors = require("cors");

// app.use(express.json());
app.use(cors());

const bodyParser = require("body-parser")

app.use(bodyParser.json())

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// // ping db
// const { Pool } = require("pg");
// const pool = new Pool({
//     host: "containers-us-west-150.railway.app",
//     user: "postgres",
//     password: "p6ZzuUWVZrpghhThYUmU",
//     database: "railway",
//     port: "6128",
//     allowExitOnIdle: true,
// });

// const pingDB = async () => {
//     try {
//         const result = await pool.query("SELECT NOW()");
//         console.log(result.rows);
//     } catch (error) {
//         console.log(error);
//     }
// };

// pingDB();


module.exports = app;