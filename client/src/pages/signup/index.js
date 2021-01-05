import React from "react";
import MiniDrawer from '../../components/MiniDrawer/index';
import { makeStyles } from '@material-ui/core/styles';
import { Container} from '@material-ui/core/';
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