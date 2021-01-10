import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { GridCarousel } from "../../components/GridCarousel";
import { getProducts } from "../../utils/ProductAPI";
import _ from "underscore";
import UserAPI from '../../utils/UserAPI';
import { Button, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import "../home/style.css";
import { Next } from "react-bootstrap/esm/PageItem";
import {MediaCard} from "../../components/Card"



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
    let [filterProd, setfilterProd] = useState([]);
    let [isSearch, setIsSearch] = useState(false);
    let [search, setSearch] = useState("");
    let [searchedProd, setSearchProd] = useState([]);

    useEffect(() => {
        getGroupedProducts()
        setIsSearch(false)
    }, [])

    const getGroupedProducts = () => {
        getProducts().then(res => {
            setfilterProd(_.toArray(_.groupBy(res.data, "category")).sort((a, b) => b.length - a.length).slice(0, 5))
        })
    }
    const searchProduct = () => {
        getProducts().then(res => {
            console.log(res.data)
            setSearchProd(res.data.filter(prod => prod.productName.toLowerCase().includes(search.toLowerCase())))
            setIsSearch(true)     
        })
    }

    // const searchProduct = () => {
    //     getProducts().then(res => {
           
    //     })
    // }

    const addToUser = (id) => {
        UserAPI.updateUser({ "wishList": id })
    }

    return (
        <div className="container-fluid">
            <Grid item xs={10}>
                {/* {   this is the ADDs carousel} */}
            </Grid>

            <Grid className="formholder" item xs={10}>
                <Form className="ml-5">
                    <FormGroup row >
                        <Label><h1 className="homesearchtitle"> Search Product : </h1></Label>
                        <Input
                            type="text"
                            className="homeinput"
                            //value={product}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <Button className="botonesubmithome" onClick={searchProduct}>Search</Button>
                    </FormGroup>
                </Form>
            </Grid>
            { !isSearch ? <div>
                {filterProd.map(category => {
                    return <Grid item xs={12}>
                        <GridCarousel items={category} addToUser={addToUser} categoryName={category[0].category} />
                    </Grid>
                })}
            </div> 
            : searchedProd.map((item, index) => {
                    return <div className="flex row-wrap" > <MediaCard key={index} product={item} addToUser={addToUser}/> </div>
            })} 

            {/*<div className={classes.root}>
                <Grid container spacing={3}>

                </Grid>
            </div>*/}
        </div>
    )
}