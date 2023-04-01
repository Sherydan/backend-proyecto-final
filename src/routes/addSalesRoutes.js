const express = require("express");
const router = express.Router()
const {reportRequest} = require("../middlewares/logger")

const { insertSales } = require("../controllers/addSalesController");



router.post("/sales",reportRequest, insertSales)

module.exports = router