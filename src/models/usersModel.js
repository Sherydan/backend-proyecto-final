const { pool } = require("../helpers/connectionDB");
const bcrypt = require("bcryptjs");
const e = require("express");

const registerUser = async (user) => {
    try {
        let { email, password, rol, first_name, last_name  } = user;
        const encriptedPassword = bcrypt.hashSync(password);
        password = encriptedPassword;
        const values = [
            email,
            encriptedPassword,
            rol,
            first_name,
            last_name,
        ];
        const consulta =
            "INSERT INTO users VALUES (DEFAULT, $1, $2, $3, $4, $5)";
        const result = await pool.query(consulta, values);
        const rowCount = result.rowCount;

        if (!rowCount) {
            throw {
                code: 404,
                message: "Cant create user",
            };
        }

        return result.rows;
    } catch (error) {
        console.log(error);
    }
};
// check if user already exists, returns true if exists, false if not
const checkIfUserAlreadyExists = async ({ email }) => {
    console.log("email on model", email);
    try {
        const consulta = "SELECT * FROM users WHERE email = $1";
        const values = [email];
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

const getUser = async (email) => {
    try {
        values = [email];
        const consulta = "SELECT * FROM users WHERE email = $1";
        const result = await pool.query(consulta, values);
        return result.rows;
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (user) => {
    try {
        let { password, rol } = user;
        const values = [password, rol];
        const consulta =
            "UPDATE users SET password = $2, rol = $3 WHERE email = $1";
        const result = await pool.query(consulta, values);

        const rowCount = result.rowCount;

        if (!rowCount) {
            throw {
                code: 404,
                message: "Cant update user",
            };
        }

        return result.rows;
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (email) => {
    try {
        const values = [email];
        const consulta = "DELETE FROM users WHERE email = $1";
        const result = await pool.query(consulta, values);
        const rowCount = result.rowCount;

        if (!rowCount) {
            throw {
                code: 404,
                message: "Cant delete user",
            };
        }

        return result.rows;
    } catch (error) {
        console.log(error);
    }
};


module.exports = { registerUser, checkIfUserAlreadyExists, getUser, updateUser, deleteUser };
