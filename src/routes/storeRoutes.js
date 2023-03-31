const express = require("express");
const router = express.Router()
const {reportRequest} = require("../middlewares/logger")

const { insertStore, storeData, updateStoreData, delStore } = require("../controllers/storeController");


router.post("/store",reportRequest, insertStore)
router.get("/store/:id", reportRequest, isLogin, storeData)
// put debe llevar id
router.put("/store/:id", reportRequest, isLogin, updateStoreData)
router.delete("/store/:id", reportRequest, isLogin, delStore)



module.exports = router
