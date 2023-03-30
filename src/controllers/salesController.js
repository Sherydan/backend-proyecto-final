const { addSales, getSales } = require("../models/salesModel");

const insertSales = async (req, res) => {
    try {
        const sales = req.body;
        const result = await addSales(sales);
        res.status(201).send(result);
    } catch (error) {
        console.log(error);
    }
};

const getSalesReport = async (req, res) => {
    try {
        const result = await getSales();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
};


module.exports = { insertSales, getSalesReport };