const {
    registerUser,
    getTeam,
    getUserProfile,
    checkIfUserAlreadyExists,
    checkIfUserIsAdmin,
    deleteUser,
} = require("../models/usersModel");
const { checkUserFields } = require("../helpers/validateNewUser");
const jwt = require("jsonwebtoken");

const insertUser = async (req, res) => {
    try {
        const storeId = req.decodedToken.store.id;
        const adminId = req.decodedToken.user.id;
        const role = "user";
        const { email, password, first_name, last_name } = req.body;
        const newUser = { storeId, email, password, role, first_name, last_name };
        const userExists = await checkIfUserAlreadyExists(newUser);
        const userIsAdmin = await checkIfUserIsAdmin(adminId);
        if (userIsAdmin) {
            return res.status(401).send("You are not authorized");
        }
        if (userExists) {
            res.status(404).send("User already exists");
        } else {
            if (checkUserFields(newUser)) {
                res.status(500).send("Please fill all fields");
            } else {
                const result = await registerUser(newUser);
                res.status(200).send(result);
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }



};

const teamData = async (req, res) => {
    try {
        const storeId = req.decodedToken.store.id;
        const team = await getTeam(storeId);
        console.log(team);
        res.status(200).send(team);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const updateUserData = async (req, res) => {
    try {
        const { email, password, rol } = req.body;
        const user = { email, password, rol };
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




module.exports = { insertUser, teamData, updateUserData, delUser };