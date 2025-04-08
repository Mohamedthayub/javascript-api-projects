export function validateUser(username) {
    const usernameRegex = /^(?=[a-zA-Z])[a-zA-Z0-9_-]{3,39}$/;
    const notStartWithNumber = /^[^\d].*$/;

    if(typeof username !== "string"){
        return "Username must be a string";
    }
    if (username.length === 0) {
        return "Username must not be empty";
    }
    if (username.length > 39 || username.length < 3) {
        return "Username length must be between 3 and 39 characters";
    }
    if (!usernameRegex.test(username)) {
        return "Username can only contain letters, numbers, hyphens, and underscores";
    }
    if (!notStartWithNumber.test(username)) {
        return "Username must not start with a number";
    }
    if (/^[0-9]+$/.test(username)) {
        return "Username must not consist of numbers only";
    }
    const reservedNames = ["admin","root","system"];
    if(reservedNames.includes(username.toLocaleLowerCase())){
        return "This username is not allowed";
    }
    return true;
}
