import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const fadeImages = [
    "https://images3.alphacoders.com/111/111207.jpg",
    "https://cdn.lolwot.com/wp-content/uploads/2015/12/10-of-the-most-awe-inspiring-landscapes-in-the-world-7.jpg",
    "https://th.bing.com/th/id/OIP.iZGQpowvRmN8pAi-19DWOwHaE8?pid=Api&rs=1"
];

export default function PictsSlideshow () {
    //  product context
    return (    
        <div className="slide-container"style={{width:"500px"}}>
            <Fade>
                <div className="each-fade">
                    <div className="image-container" >
                        <img src={fadeImages[0]} style={{width:"500px"}} />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container" >
                        <img src={fadeImages[1]} style={{width:"500px"}}/>
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container" style={{width:"500px"}}>
                        <img src={fadeImages[2]} />
                    </div>
                </div>
            </Fade>
        </div>
        
    )
}