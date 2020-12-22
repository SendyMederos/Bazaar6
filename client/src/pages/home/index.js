import React, { useEffect, useState } from "react";
import MiniDrawer from '../../components/MiniDrawer/index';
import ImgCarousel from "../../components/Carousel"

function Homepage() {
    return (
        <MiniDrawer>
            <ImgCarousel />
        </MiniDrawer>
    )
}


export default Homepage;