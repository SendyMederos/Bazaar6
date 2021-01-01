import React, { useEffect, useState } from "react";
import MiniDrawer from '../../components/MiniDrawer'
import ProductContent from '../../components/ProductContent'
import Paper from '@material-ui/core/Paper';

export default function Product() {
    return (
        <>
            <MiniDrawer>
                <Paper>
                    <ProductContent />
                    
                    </Paper>
            </MiniDrawer>
        </>
    )
}