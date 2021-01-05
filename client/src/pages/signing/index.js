import React, { useState } from "react";
//import { createUser, login } from '../../services/http/authHttp';
import { Signup, Signin } from '../../components/SignForms';
import "./style.css"
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
import { sign } from "jsonwebtoken";
=======
import UserContext from "../../utils/context/userContext";
import { sign } from "jsonwebtoken";
import { keys } from "@material-ui/core/styles/createBreakpoints";


>>>>>>> 32956ab6f1ba09aeced2d4bc7b7966652a1c1a97

const useStyles = makeStyles(() => ({
}));

export default function Signing() {
<<<<<<< HEAD
    const [isLoggingIn, setisLoggingIn] = useState(false);
=======

    const [isLoggingIn, setisLoggingIn] = useState(false);

>>>>>>> 32956ab6f1ba09aeced2d4bc7b7966652a1c1a97
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
<<<<<<< HEAD
    const [signUpForm, setSignUpForm] = useState({
=======

    const [signUpForm, setSignUpForm] =useState({
>>>>>>> 32956ab6f1ba09aeced2d4bc7b7966652a1c1a97
        firstName: '',
        lastName: '',
        email: '',
        password: '',
<<<<<<< HEAD
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
=======
  
            street: '',
            state: '',
            zip: '',
            city: '',
   
    });


    const handleFormChange = (value, key) => {
        
        isLoggingIn
        ? setLoginForm({
            ...loginForm,
            [key]: value
        }) :
        setSignUpForm({
            ...signUpForm,
            [key] : value,
        })
        
       
    }

    const handleFinish = () => {
        const valueToSend = isLoggingIn ? loginForm : signUpForm;

    }


    const classes = useStyles();



>>>>>>> 32956ab6f1ba09aeced2d4bc7b7966652a1c1a97
    return (
        <div style={{ width: "100%" }}>
            <div className="row">
                <div className="col-12 backbox">
                    <div className="forms">
                        <h1 className="align-center"> BAZAAR6</h1>
<<<<<<< HEAD
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
=======
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
>>>>>>> 32956ab6f1ba09aeced2d4bc7b7966652a1c1a97
                    </div>
                </div>
                <div className="col-2 right">
                    <img className="" src="https://i.pinimg.com/originals/b0/63/e6/b063e69aec55ee699cf38c757cabaae3.jpg" />
                </div>
            </div>
        </div>
    )
}