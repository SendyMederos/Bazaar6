import React, { useEffect, useState } from "react";
import MiniDrawer from '../../components/MiniDrawer/index';
import ImgCarousel from "../../components/Carousel"
import { makeStyles } from '@material-ui/core/styles';
//import JumboAd from '../../components/Jumbotron'
//import LearnModal from '../../components/LearnModal'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { MediaCard } from '../../components/Card';
import { GridCarousel } from "../../components/GridCarousel";

const listData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    imgCarousel: {
        padding: theme.spacing(0),
        justifyContent: 'center',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function HomePage() {
    const classes = useStyles();
    return (
        <>
            <MiniDrawer>
                
            </MiniDrawer>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <GridCarousel items={listData} />
                    </Grid>
                    <Grid item xs={12}>
                    <GridCarousel items={listData} />
                    </Grid>
                    <Grid item xs={12}>
                    <GridCarousel items={listData} />
                    </Grid>
                    <Grid item xs={12}>
                    <GridCarousel items={listData} />
                    </Grid>
                    <Grid item xs={12}>
                    <GridCarousel items={listData} />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}