import React, { useEffect, useState } from "react";
import MiniDrawer from '../../components/MiniDrawer/index';
import ImgCarousel from "../../components/Carousel"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Container, Button } from '@material-ui/core/';
import MediaCard from '../../components/Card';
import { createUser } from '../../services/http/authHttp'; 

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    imgCarousel: {
        padding: theme.spacing(2),
        justifyContent: 'center',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    const checkCookie = () => {
        
    }

    const SubmitUser = () => {
        console.log("submitUser")
        const user = {
            firstName: "Evan3",
            lastName: "Motte3",
            email: "em@gmail.com3",
            password: "1233",
            location: {
                street: "main st",
                city: "pineville",
                state: "nc",
                postcode: "28134"
            }
        }
        createUser(user)
    }

    return (

        <MiniDrawer>
            <Container maxWidth="xl">
            </Container>
            <button onClick={() => SubmitUser()}>SUBMIT</button>
        </MiniDrawer>
    );
}