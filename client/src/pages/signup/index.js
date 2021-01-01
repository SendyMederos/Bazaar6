import React, { useEffect, useState } from "react";
import MiniDrawer from '../../components/MiniDrawer/index';
import ImgCarousel from "../../components/Carousel"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Container, Button } from '@material-ui/core/';
import MediaCard from '../../components/Card';
import { createUser } from '../../services/http/authHttp'; 
import { Info } from "@material-ui/icons";

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

    const SubmitUser = () => {
        console.log("submitUser")
        const user = {
            firstName: "Evan123456",
            lastName: "56",
            email: "emow456@gmail.com",
            password: "1234123456",
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