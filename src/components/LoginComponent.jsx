import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI} from "../api/AuthAPI";
import LinkedinLogo from "../assets/linkedinLogo.png";
import GoogleButton from 'react-google-button';
import '../Sass/LoginComp.scss';
import { toast } from "react-toastify";

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({});
    const login = async () => {
    try {
       let response = await LoginAPI(credentials.email, credentials.password);
       toast.success('Sign In to LinkedIn!');
       return response
    } catch(err) {
        toast.error("Please check credentials");
    }
    };

    const googleSignIn = () => {
        let res = GoogleSignInAPI();
        console.log(res);
    }
    return (
        <div className="login-wrapper">
            <img src={LinkedinLogo} className="linkedinLogo"/>
            <div className="login-wrapper-inner">
            <h1 className="heading">Sign In</h1>
            <p className="sub-heading">Stay updated on your professional world</p>
            <div className="auth-inputs">
            <input onChange= {
                (event) => setCredentials({...credentials, email: event.target.value})
            } 
            type="email"
            className="common-input"
            placeholder="Email or Phone"/>
            <input onChange= {
                (event) => setCredentials({...credentials, password: event.target.value})
            }
            type="password" 
            className="common-input"
            placeholder="Password"
            />
            </div>
            <button onClick={login} className="login-btn">
                Sign in
            </button>
            <hr className="hr-text" data-content="OR"></hr>
            <div className="google-btn-container">
                <GoogleButton className="google-btn" type="light"
                    onClick={googleSignIn}
                />
                <p className="go_to_signup">New to LinkedIn? <span className="join_now">Join Now</span></p>
            </div>
            </div>
        </div>
    );
}