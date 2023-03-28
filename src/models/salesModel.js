const { pool } = require("../helpers/connectionDB");

// add sales receives an array of sales
// needs to insert each sale into the database
const addSales = async (sales) => {
    try {
        // for each sale in the array
        for (let sale of sales) {
            // destructure the sale
            let { date, id, product_id, product_description, store_id, total_sold, unit_price, units_sold } = sale;
            // create the values array
            const values = [product_id, product_description, store_id, unit_price, total_sold, units_sold, date];
            // create the query
            const consulta =
                "INSERT INTO product_sales VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7)";
            // execute the query
            const result = await pool.query(consulta, values);
            // get the row count
            const rowCount = result.rowCount;
            // if the row count is 0, throw an error
            if (!rowCount) {
                throw {
                    code: 422,
                    message: "Cant create sale",
                };
            }
        }
        // return the result
        return result.rows;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { addSales };