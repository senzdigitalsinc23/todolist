import "./assets/css/reset.css";
import "./assets/css/styles.css";

import { userRegistration } from "./controllers/signup.js";


let register = userRegistration('senz', '1234', '1234');


console.log(register.registerUser());
