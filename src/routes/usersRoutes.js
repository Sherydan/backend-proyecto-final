const express = require("express");
const router = express.Router()
const {reportRequest} = require("../middlewares/logger")

const {insertUser, userData, updateUserData, delUser } = require("../controllers/usersController");
const { isLogin } = require("../middlewares/isLogin");

router.post("/usuarios",reportRequest, insertUser)
router.get("/usuarios", reportRequest,isLogin, userData)
router.put("/usuarios", reportRequest,isLogin, updateUserData)
router.delete("/usuarios", reportRequest,isLogin, delUser)



module.exports = router