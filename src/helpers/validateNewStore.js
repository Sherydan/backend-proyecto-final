const checkStoreFields = (store) => {
    const { name, rut, email, adress, industry } = store;
    // all fields are required

    if (
        !name ||
        !rut ||
        !email ||
        !adress ||
        !industry
    ) {
        return true;
    } else {
        return false;
    }
};

module.exports = { checkStoreFields };
