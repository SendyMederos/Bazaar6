import React, { useEffect, useState } from "react";
import ProductContent from '../../components/ProductContent'
import Paper from '@material-ui/core/Paper';
import { getProduct } from "../../utils/ProductAPI"
import { useParams } from "react-router-dom"
import UserAPI from "../../utils/UserAPI"

export default function Product() {

    const [product, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        getProduct(id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [])

    const  addToUser = (id) => {
		UserAPI.updateUser({ "wishList": id })
		alert("This item has been added to your cart")
	} 
    return (
        <>
            <Paper className="m-2 d-flex ">
                {product.image ? <ProductContent product={product} addToUser={addToUser}/> : "" }
            </Paper>
        </>
    )
}