import React from 'react';



export const PictCarousel = (props) => {

    return (
        
        <div class="slideshow-container">

            {props.map(pict => )}<div class="mySlides fade">
                <img src="img1.jpg" style="width:100%" />
            </div>

            <div class="mySlides fade">
                <img src="img2.jpg" style="width:100%" />
            </div>

            <div class="mySlides fade">
                <img src="img3.jpg" style="width:100%" />
            </div>

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>

    )
}
