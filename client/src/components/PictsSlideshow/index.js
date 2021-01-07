import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const fadeImages = [
    "https://images3.alphacoders.com/111/111207.jpg",
    "https://cdn.lolwot.com/wp-content/uploads/2015/12/10-of-the-most-awe-inspiring-landscapes-in-the-world-7.jpg",
    "https://th.bing.com/th/id/OIP.iZGQpowvRmN8pAi-19DWOwHaE8?pid=Api&rs=1"
];

export default function PictsSlideshow ({image}) {

    console.log(image)

    return (    
        <div className="slide-container"style={{width:"500px"}}>
            <Fade>
                <div className="each-fade">
                    <div className="image-container" >
                        <img src={image[0]} alt="" style={{width:"500px"}} />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container" >
                        <img src={image[1]} alt="" style={{width:"500px"}}/>
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container"  style={{width:"500px"}}>
                        <img src={image[2]} alt="" />
                    </div>
                </div>
            </Fade>
        </div>
        
    )
}