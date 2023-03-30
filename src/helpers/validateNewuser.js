
const checkUserFields = ({email, password, first_name, last_name}) => {
    console.log(email, password, first_name, last_name);
    if (!email || !password || !first_name || !last_name) {
        return true
    } else {
        return false
    }
}

module.exports = {checkUserFields}