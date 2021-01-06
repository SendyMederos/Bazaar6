import React, { useEffect, useState } from "react";
import MiniDrawer from '../../components/MiniDrawer/index';
import ImgCarousel from "../../components/Carousel"
import { makeStyles } from '@material-ui/core/styles';
//import JumboAd from '../../components/Jumbotron'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import NewImage from "../../components/ProductUpload";
import { MediaCard } from '../../components/Card';
import { GridCarousel } from "../../components/GridCarousel";
import {getCategoryProducts, getProducts} from "../../utils/ProductAPI";
import _ from 'underscore'

const groceries = []
const getGroupedProducts= (category) => {
    getCategoryProducts(category).then(res => console.log(res))
    getProducts().then(res => {
        console.log(_.groupBy(res.data, res.data.category))
    })
}

export default function HomePage() {
    useEffect(() =>  {
        getGroupedProducts(category)
    }, [])
    return (
        <>
                <Grid item xs={10}>

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
                <Grid item xs={12}>
                    <GridCarousel items={listData} />
                </Grid>

                {/*<div className={classes.root}>
                <Grid container spacing={3}>

                </Grid>
            </div>*/}
        </>
    )
}