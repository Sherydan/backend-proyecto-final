const { addSales } = require("../models/salesModel");

const addSalesController = async (req, res) => {
    try {
        const sales = req.body;
        const result = await addSales(sales);
        res.status(201).send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { addSalesController };