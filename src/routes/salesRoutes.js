const express = require("express");
const router = express.Router()
const {reportRequest} = require("../middlewares/logger")

const { insertSales, getSalesReport } = require("../controllers/salesController");



router.post("/sales",reportRequest, insertSales)
router.get("/sales",reportRequest, getSalesReport)


module.exports = router