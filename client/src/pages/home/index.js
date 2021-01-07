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
import { getCategoryProducts, getProducts } from "../../utils/ProductAPI";
import _ from "underscore";





// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     imgCarousel: {
//         padding: theme.spacing(0),
//         justifyContent: 'center',
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));

export default function HomePage() {
    // const classes = useStyles();
    useEffect(() => {
        getGroupedProducts()
    }, [])

    let [filterProd, setfilterProd] = useState([]);

    const getGroupedProducts = () => {
        getProducts().then(res => {
            setfilterProd(_.toArray(_.groupBy(res.data, "category")).sort((a, b) => b.length - a.length).slice(0, 5))
        })
    }
    return (
        <>
            <Grid item xs={10}>
                {/* {   this is the ADDs carousel} */}
            </Grid>

            {filterProd.map(category => {
                return <Grid item xs={12}>
                    <GridCarousel items={category} />
                </Grid>
            })}

            {/*<div className={classes.root}>
                <Grid container spacing={3}>

                </Grid>
            </div>*/}
        </>
    )
}