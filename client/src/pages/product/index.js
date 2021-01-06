import React, { useEffect, useState } from "react";
import ProductContent from '../../components/ProductContent'
import Paper from '@material-ui/core/Paper';

export default function Product() {
    return (
        <>
            <Paper className="m-2 d-flex">
                <ProductContent />
            </Paper>
        </>
    )
}