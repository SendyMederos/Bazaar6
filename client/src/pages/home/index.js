import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { GridCarousel } from "../../components/GridCarousel";
import { getProducts } from "../../utils/ProductAPI";
import _ from "underscore";
import UserAPI from '../../utils/UserAPI';
import { Button, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import "../home/style.css";
import { Next } from "react-bootstrap/esm/PageItem";
import { MediaCard } from "../../components/Card"



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

    let [filterProd, setfilterProd] = useState([]);
    let [isSearch, setIsSearch] = useState(false);
    let [search, setSearch] = useState("");
    let [searchedProd, setSearchProd] = useState([]);

    useEffect(() => {
        getGroupedProducts()
    }, [])

    const getGroupedProducts = () => {
        getProducts().then(res => {
            setfilterProd(_.toArray(_.groupBy(res.data, "category")).sort((a, b) => b.length - a.length).slice(0, 5))
        })
    }

    const searchProduct = () => {
        getProducts().then(res => {
            setSearchProd(res.data.filter(prod => prod.productName.toLowerCase().includes(search.toLowerCase())))
            setIsSearch(true)
            setSearch("")
        })
    }

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
                        <Label><h1 className="homesearchtitle"> Search for a Product : </h1></Label>
                        <Input
                            type="text"
                            className="homeinput"
                            value={search}
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
                :
                <>
                    <Button onClick={() => setIsSearch(false)}>Back to Categories</Button>
                    <Grid container spacing={2}>
                        {searchedProd.map((item, index) => {
                            return <Grid xs={12} sm={6} md={4} lg={3} className="mt-4 mb-4" align="center">
                                <MediaCard key={index} product={item} addToUser={addToUser} />
                            </Grid>
                        })}
                    </Grid>
                </>
            }

            {/*<div className={classes.root}>
                <Grid container spacing={3}>

                </Grid>
            </div>*/}
        </div>
    )
}