// Set up of the endpoints
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { app } from "../firebaseConfig";

let auth = getAuth(app) // contains all the data coming from firebase
export const LoginAPI = (email, password) => {
    try {
        let res = signInWithEmailAndPassword(auth, email, password);
        // console.log("Login in Successful")
        return res
    } catch(err) {
        alert(err.errors.message);
    }
};

export const SignUpAPI = (email, password) => {
    try {
        let res = createUserWithEmailAndPassword(auth, email, password);
        return res
    } catch(err) {
        alert(err.errors.message);
    }
};

