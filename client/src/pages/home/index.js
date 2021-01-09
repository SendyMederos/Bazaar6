import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { GridCarousel } from "../../components/GridCarousel";
import { getProducts } from "../../utils/ProductAPI";
import _ from "underscore";
import UserAPI from '../../utils/UserAPI';



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

    const  addToUser = (id) => {
		UserAPI.updateUser({ "wishList": id })
		alert("This item has been added to your cart")
	} 
    
    return (
        <>
            <Grid item xs={10}>
                {/* {   this is the ADDs carousel} */}
            </Grid>

            {filterProd.map(category => {
                return <Grid item xs={12}>
                    <GridCarousel items={category} addToUser={addToUser} categoryName={category[0].category}/>
                </Grid>
            })}

            {/*<div className={classes.root}>
                <Grid container spacing={3}>

                </Grid>
            </div>*/}
        </>
    )
}