import React, { useState } from "react";
import "./gallery.css";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import Img4 from './img/img 4.jpg';
import Img5 from './img/img5.jpg';
import Img6 from './img/img6.jpeg';
import Img7 from './img/img7.jpeg';
import Img8 from './img/img8.jpeg';
import Img9 from './img/img9.jpg';
import Img10 from './img/img10.jpeg';
import Img11 from './img/img11.webp';
import Img12 from './img/img12.webp';
import Img13 from './img/img13.jpg';
import Img14 from './img/img14.jpg';
const Gallery=() =>{
    
    let data=[
        {
            id: 1,
            imgSrc:Img1,
        },
        {
            id: 2,
            imgSrc:Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc:Img4,
        },
        {
            id: 5,
            imgSrc:Img5,
        },
        {
            id: 6,
            imgSrc:Img6,
        },
        {
            id: 7,
            imgSrc:Img7,
        },
        {
            id: 8,
            imgSrc:Img8,
        },
        {
            id: 9,
            imgSrc:Img9,
        },
        {
            id: 10,
            imgSrc:Img10,
        },
        {
            id: 11,
            imgSrc:Img11,
        },
        {
            id: 12,
            imgSrc:Img12,
        },
        {
            id: 13,
            imgSrc:Img13,
        },
         {
            id: 14,
            imgSrc:Img14,
        },
    ]
   const[model,setModel]=useState(false);
   const[tempImgSrc, setTempImgSrc]=useState('');

    const getImg= (imgSrc) =>{
        console.log(imgSrc);
       setTempImgSrc(imgSrc);
       setModel(true);
    }

    return(
        <>
        <div className={model? "model open" : "model"} >
            <img src={tempImgSrc} />
            <AiOutlineCloseCircle  onClick={()=> setModel(false)}/>
        </div>
          <div className="gallery">
            {data.map((item,index)=>{
                return(
                    <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                    <img src={item.imgSrc} style={{width: '100%'}}/>
                    </div>
                );
            })}
          </div>
        </>
    );
}


export default Gallery; 