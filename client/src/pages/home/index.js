import React, { useEffect, useState } from "react";
import MiniDrawer from '../../components/MiniDrawer/index';
import ImgCarousel from "../../components/Carousel"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Container, Button } from '@material-ui/core/';
import MediaCard from '../../components/Card';

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

    return (

        <MiniDrawer>
            <Container maxWidth="xl">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <ImgCarousel className={classes.imgCarousel} />
                        </Grid>
                        <Grid item xs={12}>
                            <MediaCard />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </MiniDrawer>

    );
}