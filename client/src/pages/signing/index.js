import React, { useState } from "react";
//import { createUser, login } from '../../services/http/authHttp';
import { Signup, Signin } from '../../components/SignForms';
import "./style.css"


export default function Signing() {
    const [isLoggingIn, setisLoggingIn] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
    const [signUpForm, setSignUpForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        street: '',
        state: '',
        zip: '',
        city: '',
    });
    const handleFormChange = (value, keys) => {
        isLoggingIn ?
         setLoginForm({
                ...loginForm,
                [keys]: value
            }) :
            setSignUpForm({
                ...signUpForm,
                 [keys]: value,
            })
    }
    const handleFinish = () => {
        const valueToSend = isLoggingIn ? loginForm : signUpForm;
    }
    return (
        <div style={{ width: "100%" }}>
            <div className="row">
                <div className="col-12 backbox">
                    <div className="forms">
                        <h1 className="align-center"> BAZAAR6</h1>
                        {!isLoggingIn ?
                            <Signin
                                handleFinish={handleFinish}
                                handleFormChange={handleFormChange}
                                loginForm={loginForm}
                                setisLoggingIn={() => setisLoggingIn(!isLoggingIn)} /> :
                            <Signup
                                handleFinish={handleFinish}
                                handleFormChange={handleFormChange}
                                signUpForm={signUpForm}
                                setisLoggingIn={() => setisLoggingIn(!isLoggingIn)} />}
                    </div>
                </div>
                <div className="col-2 right">
                    <img className="" src="https://i.pinimg.com/originals/b0/63/e6/b063e69aec55ee699cf38c757cabaae3.jpg" />
                </div>
            </div>
        </div>
    )
}