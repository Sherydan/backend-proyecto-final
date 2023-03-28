const express = require("express");
const router = express.Router()
const {reportRequest} = require("../middlewares/logger")

const {insertUser, userData, updateUserData, delUser } = require("../controllers/usersController");
const { isLogin } = require("../middlewares/isLogin");

router.post("/user",reportRequest, insertUser)
router.get("/user", reportRequest,isLogin, userData)
router.put("/user", reportRequest,isLogin, updateUserData)
router.delete("/user", reportRequest,isLogin, delUser)


module.exports = router