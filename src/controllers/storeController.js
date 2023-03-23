const {
    createStore,
    checkIfStoreAlreadyExists,
    getStore,
    updateStore,
    deleteStore,
} = require("../models/storeModel");

const { checkStoreFields } = require("../helpers/validateNewStore");

const insertStore = async (req, res) => {
    try {
        const { name, rut, email, adress, industry } = req.body;
        const store = { name, rut, email, adress, industry };
        const storeExists = await checkIfStoreAlreadyExists(store);
        if (storeExists) {
            res.status(404).send("Store already exists");
        } else {
            if (checkStoreFields(store)) {
                res.status(500).send("Please fill all fields");
            } else {
                const result = await createStore(store);
                res.status(200).send(result);
            }
        }
    } catch (error) {}
};

const storeData = async (req, res) => {
    try {
        const { name } = req;
        const store = await getStore(name);
        res.status(200).send(store[0]);
    } catch (error) {
        console.log(error);
    }
};

const updateStoreData = async (req, res) => {
    try {
        const { name, adress } = req.body;
        const store = { name, adress };
        const result = await updateStore(store);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
};

const delStore = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await deleteStore(name);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
};



module.exports = { insertStore, storeData, updateStoreData, delStore };
