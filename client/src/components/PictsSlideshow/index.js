import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
<<<<<<< HEAD
export default function PictsSlideshow({ image }) {
    return (
        <div className="slide-container" style={{width:"500px", height:"400px", borderRadius:"30px", boxShadow:"5px 5px 10px gray" }}>
=======

<<<<<<< HEAD
export default function PictsSlideshow ({image}) {

    return (    
        <div className="slide-container" style={{width:"500px", height:"400px", borderRadius:"30px", boxShadow:"5px 5px 10px gray"}}>
=======


export default function PictsSlideshow({ image }) {

    return (
        <div className="slide-container" style={{width:"500px", height:"400px", borderRadius:"30px", boxShadow:"5px 5px 10px gray"}}>
>>>>>>> 3532eae743236f70ef8b79a24d83ef58a36ac679
>>>>>>> ac10570f93b18270aa3901f12b68ae2f8359a581
            <Fade>
                {image.map(img =>
                    <div className="each-fade">
                        <div className="image-container" >
<<<<<<< HEAD
                            <img src={img} alt=""  style={{width:"500px", height:"400px", borderRadius:"30px"}} />
=======
<<<<<<< HEAD
                            <img src={img} alt="" style={{ width: "500px", height:"400px", borderRadius:"30px",  }} />
=======
                            <img src={img} alt="" style={{width:"500px", height:"400px", borderRadius:"30px"}}/>
>>>>>>> 3532eae743236f70ef8b79a24d83ef58a36ac679
>>>>>>> ac10570f93b18270aa3901f12b68ae2f8359a581
                        </div>
                    </div>
                )}
            </Fade>
        </div>
    )
}