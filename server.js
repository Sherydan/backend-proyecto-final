require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// app.use(express.json());
app.use(cors());
app.use(express.json());
<<<<<<< HEAD
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
=======

// comente levantar el server por que si no jest me decia que el puerto estaba en uso al correr los test por ardchivos separados
// app.set("port", process.env.PORT || 4000);
// app.listen(app.get("port"), () => console.log(`Server running on port ${app.get("port")}`));
>>>>>>> origin/master

module.exports = app;