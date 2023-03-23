const checkStoreFields = (name, rut, email, adress, industry) => {
    
    if (!name || !rut || !email || !adress || !industry) {
        return false;
    } else {
        return true;
    }
};

module.exports = { checkStoreFields };
