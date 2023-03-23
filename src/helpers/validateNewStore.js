const checkStoreFields = (name, rut, email, adress, industry) => {
    
    if (!name || !rut || !email || !adress || !industry) {
        return true;
    } else {
        return false;
    }
};

module.exports = { checkStoreFields };
