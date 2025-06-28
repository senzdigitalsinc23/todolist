

let userDetails = (username, password, confirmPass) => {
    
    const getUsername = () => {
        return username;
    }

    const getPassword = () => {
        return password;
    }

    const getConfirm = () => {
        return confirmPass;
    }

    return { getUsername, getPassword, getConfirm };
}

let validateUserDetails = () => {
    
    const checkUsername = () => { 
        if(user.getUsername() != "") {
            return true;
        }
        return false;
    }

    const checkPassword = () => { 
        if(user.getPassword() != "") {
            return true;
        }
        return false;
    }

    const passwordMatches = () => { 
        if(user.getPassword() == user.getConfirm()) {
            return true;
        }
        return false;
    }

    return {
        checkUsername,
        checkPassword,
        passwordMatches
    }
}

let registerUser = () => {
    let message = '';

    if (validate.checkUsername()) {
        if (validate.checkPassword()) {
            if (validate.passwordMatches()) {
                let userInfo = {
                    'username': user.getUsername(),
                    'password': user.getPassword()
                }

                localStorage.setItem(user.getUsername(), JSON.stringify(userInfo));

                message = "User " + user.getUsername().toUpperCase() + " registered successfully";
            }else {
                message =  "Passwords do not match";
            }
        }else {
            message =  "Password is required";
        }
    }else {
        message =  "Username is required";
    }

    return message;
}
