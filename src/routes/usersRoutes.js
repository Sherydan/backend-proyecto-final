const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router()
const {reportRequest} = require("../middlewares/logger")



const {insertUser, teamData, updateUserData, delUser } = require("../controllers/usersController");
const { isLogin } = require("../middlewares/isLogin");
const authMiddleware = require("../middlewares/authMiddleware");
router.use(bodyParser.json());
router.post("/user",reportRequest, insertUser)
router.get("/user", reportRequest, authMiddleware, teamData)
router.put("/user", reportRequest,isLogin, updateUserData)
router.delete("/user", reportRequest,isLogin, delUser)


module.exports = router