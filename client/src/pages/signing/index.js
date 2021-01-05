import React, { useState } from "react";
//import { createUser, login } from '../../services/http/authHttp';
import { Signup, Signin } from '../../components/SignForms';
import "./style.css"
import { makeStyles } from '@material-ui/core/styles';
import UserContext from "../../utils/context/userContext";


const useStyles = makeStyles(() => ({

}));

export default function Signing() {

    const [amember, setAmember] = useState();
    var  user ={};
   

    const classes = useStyles();

    // const SubmitUser = () => {
    //     console.log("submitUser")
    //     const user = {
    //         firstName: "Evan123456",
    //         lastName: "56",
    //         email: "emow456@gmail.com",
    //         password: "1234123456",
    //         location: {
    //             street: "main st",
    //             city: "pineville",
    //             state: "nc",
    //             postcode: "28134"
    //         }
    //     }
    //     createUser(user)
    // }

    // const handleSigninTrue = () => {
    //     SubmitUser()
    // }

    function notamember() {
        setAmember(!amember)
    }
   async  function signup (e) {
       e.preventDefault()
       user = {
            firstName: e.target.fristname.value,
            lastName: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            location: {
                street: e.target.inputAddress.value + e.target.inputAddress2.value,
                city: e.target.inputCity.value,
                state: e.target.inputState.value,
                postcode: e.target.inputZip.value,
            }
        }
        console.log(user)
        alert(user)
    }
    function login() {

     }

    return (
    <UserContext.Provider value={{ login, signup, notamember }}>
            <div style={{ width: "100%" }}>
                <div className="row">
                    <div className="col-12 backbox">
                        <div className="forms">
                            <h1 className="align-center"> BAZAAR6</h1>
                            {!amember ?<Signin /> : <Signup />}
                        </div>
                    </div>
                    <div className="col-2 right">
                        <img className="" src="https://i.pinimg.com/originals/b0/63/e6/b063e69aec55ee699cf38c757cabaae3.jpg" />
                    </div>
                </div>
            </div>
         </UserContext.Provider>
    )
}