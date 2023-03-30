const express = require("express");
const router = express.Router()
const {reportRequest} = require("../middlewares/logger")

const { insertStore, storeData, updateStoreData, delStore } = require("../controllers/storeController");


router.post("/store",reportRequest, insertStore)
router.get("/store/:id", reportRequest, storeData)
// put debe llevar id
router.put("/store", reportRequest, updateStoreData)
router.delete("/store", reportRequest, delStore)



module.exports = router
