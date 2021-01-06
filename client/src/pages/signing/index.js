import React, { useState } from "react";
import { Signup, Signin } from '../../components/SignForms';
import "./style.css"
import { createUser, login } from '../../services/http/authHttp'; 

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
        city: ''
    });

    const handleFormChange = (value, key) => {

        isLoggingIn
            ? setLoginForm({
                ...loginForm,
                [key]: value
            }) :
            setSignUpForm({
                ...signUpForm,
                [key]: value,
            })
    }

    const formatData = ({ firstName, lastName, email, password, street, state, zip, city }) => {
        return {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            location: {
                street: street,
                city: city,
                state: state,
                postcode: zip,
                
            }
        }
    }

    const handleFinish = async () => {
        const valueToSend = await isLoggingIn ? loginForm : formatData(signUpForm);
        !isLoggingIn ? createUser(valueToSend) : login(valueToSend)
        console.log(valueToSend)
    }

    return (
        <div style={{ width: "100%" }}>
            <div className="row">
                <div className="col-12 backbox">
                    <div className="forms">
                        <h1 className="align-center"> BAZAAR6</h1>
                        {isLoggingIn ?
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