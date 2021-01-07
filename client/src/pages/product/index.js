import React, { useEffect, useState } from "react";
import ProductContent from '../../components/ProductContent'
import Paper from '@material-ui/core/Paper';
import { getProduct } from "../../utils/ProductAPI"
import { useParams } from "react-router-dom"

export default function Product() {

    const [product, setProduct] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        getProduct(id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [])


    return (
        <>
            <Paper className="m-2 d-flex">
                {product.image ? <ProductContent product={product}/> : "" }
            </Paper>
        </>
    )
}