
export const  userRegistration = (username, password, confirmPass) => {
    let message = '';

    const getUsername = () => {
        return username;
    }

    const getPassword = () => {
        return password;
    }

    const getConfirm = () => {
        return confirmPass;
    }

    const checkUsername = () => { 
        if(getUsername() != "") {
            return true;
        }
        return false;
    }

    const checkPassword = () => { 
        if(getPassword() != "") {
            return true;
        }
        return false;
    }

    const passwordMatches = () => { 
        if(getPassword() == getConfirm()) {
            return true;
        }
        return false;
    }

    const userExists = () => {
        if (localStorage.getItem(getUsername()) != null) {
            return true;
        }

        return false;
    }

    let registerUser = () => {
        
        if (checkUsername()) {
            if (checkPassword()) {
                if (passwordMatches()) {
                    if (! userExists()) {
                        let userInfo = {
                        'username': getUsername(),
                        'password': getPassword()
                        }

                        localStorage.setItem(getUsername(), JSON.stringify(userInfo));

                        message = "User " + getUsername().toUpperCase() + " registered successfully";
                    }else {
                        message = "Username already taken";
                    }
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


    return {
        registerUser, getUsername
    }
}

