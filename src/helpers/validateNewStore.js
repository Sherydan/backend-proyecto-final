const checkStoreFields = (store) => {
    const { name, rut, email, address, industry } = store;
    // all fields are required

    if (
        !name ||
        !rut ||
        !email ||
        !address ||
        !industry
    ) {
        return true;
    } else {
        return false;
    }
};

module.exports = { checkStoreFields };
