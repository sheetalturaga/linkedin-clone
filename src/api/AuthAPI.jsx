// Set up of the endpoints
import { signInWithEmailAndPassword, getAuth, 
    createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { app } from "../firebaseConfig";

let auth = getAuth(app) // getAuth contains all the data coming from firebase app
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

export const GoogleSignInAPI = () => {
    try {
        let GoogleAuthProvider = new GoogleAuthProvider();
        let res = signInWithPopup(auth, GoogleAuthProvider);
        return res;
    } catch(err) {
        alert(err.errors.message);
    }
};

