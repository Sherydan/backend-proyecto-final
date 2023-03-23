const express = require("express");
const router = express.Router()
const {reportRequest} = require("../middlewares/logger")

const { insertStore, storeData, updateStoreData, delStore } = require("../controllers/storeController");

const { isLogin } = require("../middlewares/isLogin");

router.post("/store",reportRequest, insertStore)
router.get("/store", reportRequest,isLogin, storeData)
router.put("/store", reportRequest,isLogin, updateStoreData)
router.delete("/store", reportRequest,isLogin, delStore)

module.exports = router
