const { pool } = require("../helpers/connectionDB");

const registerStore = async (store) => {
    try {
        let { name, rut, industry, adress } = store;

        const values = [name, rut, industry, adress];
        const consulta = "INSERT INTO store VALUES (DEFAULT, $1, $2, $3, $4)";
        const result = await pool.query(consulta, values);
        const rowCount = result.rowCount;

        if (!rowCount) {
            throw {
                code: 404,
                message: "Cant create store",
            };
        }

        return result.rows;
    } catch (error) {
        console.log(error);
    }
};

const checkIfStoreAlreadyExists = async ({ name }) => {
    try {
        const consulta = "SELECT * FROM store WHERE name = $1";
        const values = [name];
        const result = await pool.query(consulta, values);

        if (result.rowCount >= 1) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
};

const getStore = async (name) => {
    try {
        values = [name];
        const consulta = "SELECT * FROM store WHERE name = $1";
        const result = await pool.query(consulta, values);
        return result.rows;
    } catch (error) {
        console.log(error);
    }
};

const updateStore = async (store) => {
    try {
        let { name, adress } = store;
        const values = [name, adress];
        const consulta = "UPDATE store SET adress = $2 WHERE name = $1";
        const result = await pool.query(consulta, values);
        const rowCount = result.rowCount;

        if (!rowCount) {
            throw {
                code: 404,
                message: "Cant update store",
            };
        }

        return result.rows;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { registerStore, checkIfStoreAlreadyExists, getStore, updateStore };
