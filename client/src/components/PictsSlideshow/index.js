import React, {useEffect} from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



export default function PictsSlideshow ({image}) {

    return (    
        <div className="slide-container"style={{width:"500px"}}>
            <Fade>
                <div className="each-fade">
                    <div className="image-container ">
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