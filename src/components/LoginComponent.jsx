import React, { useState } from "react";
import { LoginAPI, SignUpAPI} from "../api/AuthAPI";
import '../Sass/LoginComp.scss';

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({});
    const login = () => {
    try {
       let response = LoginAPI(credentials.email, credentials.password);
       return response;
    } catch(err) {
        return err;
    }
    };
    return (
        <div className="login-wrapper">
            <h1>Login Component</h1>
            <div className="auth-inputs">
            <input onChange= {
                (event) => setCredentials({...credentials, email: event.target.value})
            } 
            className="Common-input"
            placeholder="Enter your email"/>
            <input onChange= {
                (event) => setCredentials({...credentials, password: event.target.value})
            } 
            className="Common-input"
            placeholder="Enter your password"
            />
            </div>
            <button onClick={login} className="login-btn">
                Login to Linkedin
            </button>
        </div>
    );
}