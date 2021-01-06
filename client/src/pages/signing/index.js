import React, { useState } from "react";
//import { createUser, login } from '../../services/http/authHttp';
import { Signup, Signin } from '../../components/SignForms';
import "./style.css"
<<<<<<< HEAD
=======
import { makeStyles } from '@material-ui/core/styles';
import { createUser, login } from '../../services/http/authHttp'; 





const useStyles = makeStyles(() => ({




}));


>>>>>>> cdc15a93dc8b4371ca091b4aa40b3b12bc1f67a9


export default function Signing() {
    const [isLoggingIn, setisLoggingIn] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
<<<<<<< HEAD
=======

>>>>>>> cdc15a93dc8b4371ca091b4aa40b3b12bc1f67a9
    const [signUpForm, setSignUpForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        street: '',
        state: '',
        zip: '',
<<<<<<< HEAD
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
=======
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
        await !isLoggingIn ? createUser(valueToSend) : login(valueToSend)
        setLoginForm("")
        setSignUpForm("")
>>>>>>> cdc15a93dc8b4371ca091b4aa40b3b12bc1f67a9
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