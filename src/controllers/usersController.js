const {
    registerUser,
    getUser,
    checkIfUserAlreadyExists,
} = require("../models/usersModel");
const { checkUserFields } = require("../helpers/validateNewUser");
const jwt = require("jsonwebtoken");

const insertUser = async (req, res) => {
    try {
        const { email, password, rol, lenguage } = req.body;
        const user = { email, password, rol, lenguage };
        const userExists = await checkIfUserAlreadyExists(user);
        if (userExists) {
            res.status(404).send("User already exists");
        } else {
            if (checkUserFields(user)) {
                res.status(500).send("Please fill all fields");
            } else {
                const result = await registerUser(user);
                res.status(200).send(result);
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }



};

const userData = async (req, res) => {
    try {
        // const Authorization = req.header("Authorization");
        // const token = Authorization.split("Bearer ")[1];
        const { email } = req;
        const user = await getUser(email);
        console.log(user);
        res.status(200).send(user[0]);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const updateUserData = async (req, res) => {
    try {
        const { email, password, rol, lenguage } = req.body;
        const user = { email, password, rol, lenguage };
        const result = await updateUser(user);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);

    }
};

const delUser = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await deleteUser(email);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
};




module.exports = { insertUser, userData, updateUserData, delUser };