import React from 'react'
import alumnistyles from "./Alumni.module.css";
import image1 from "./Rectangle 122.png"
import image2 from "./Rectangle 123.png"
import image3 from "./Rectangle 124.png"
import image4 from "./Rectangle 125.png"
import image5 from "./Rectangle 126.png"
import image6 from "./Rectangle 127.png"
import image7 from "./Rectangle 128.png"
import image8 from "./Rectangle 129.png"
import image9 from "./Rectangle 130.png"

function Alumni() {
  return (
    <>
     <p className={alumnistyles.mainheading}>Alumni</p>
     <div className={alumnistyles.parentdiv}>
         <div className={alumnistyles.card}>
             <img className={alumnistyles.alumimage} src={image1}/>
             <p className={alumnistyles.alumname}>Name 1</p>
             <p className={alumnistyles.alumpost}>Post 1</p>
             <p className={alumnistyles.alumbatch}>Batch 1</p>
         </div>
         <div className={alumnistyles.card}>
             <img className={alumnistyles.alumimage}  src={image2}/>
             <p className={alumnistyles.alumname}>Name 1</p>
             <p className={alumnistyles.alumpost}>Post 1</p>
             <p className={alumnistyles.alumbatch}>Batch 1</p>
         </div>
         <div className={alumnistyles.card}>
             <img className={alumnistyles.alumimage}  src={image3}/>
             <p className={alumnistyles.alumname}>Name 1</p>
             <p className={alumnistyles.alumpost}>Post 1</p>
             <p className={alumnistyles.alumbatch}>Batch 1</p>
         </div>
         <div className={alumnistyles.card}>
             <img className={alumnistyles.alumimage}  src={image4}/>
             <p className={alumnistyles.alumname}>Name 1</p>
             <p className={alumnistyles.alumpost}>Post 1</p>
             <p className={alumnistyles.alumbatch}>Batch 1</p>
         </div>
         <div className={alumnistyles.card}>
             <img className={alumnistyles.alumimage}  src={image5}/>
             <p className={alumnistyles.alumname}>Name 1</p>
             <p className={alumnistyles.alumpost}>Post 1</p>
             <p className={alumnistyles.alumbatch}>Batch 1</p>
         </div>
         <div className={alumnistyles.card}>
             <img className={alumnistyles.alumimage}  src={image6}/>
             <p className={alumnistyles.alumname}>Name 1</p>
             <p className={alumnistyles.alumpost}>Post 1</p>
             <p className={alumnistyles.alumbatch}>Batch 1</p>
         </div>
         <div className={alumnistyles.card}>
             <img className={alumnistyles.alumimage}  src={image1}/>
             <p className={alumnistyles.alumname}>Name 1</p>
             <p className={alumnistyles.alumpost}>Post 1</p>
             <p className={alumnistyles.alumbatch}>Batch 1</p>
         </div>

         <div className={alumnistyles.card}>
             <img className={alumnistyles.alumimage}  src={image7}/>
             <p className={alumnistyles.alumname}>Name 1</p>
             <p className={alumnistyles.alumpost}>Post 1</p>
             <p className={alumnistyles.alumbatch}>Batch 1</p>
         </div>
         <div className={alumnistyles.card}>
             <img  className={alumnistyles.alumimage} src={image8}/>
             <p className={alumnistyles.alumname}>Name 1</p>
             <p className={alumnistyles.alumpost}>Post 1</p>
             <p className={alumnistyles.alumbatch}>Batch 1</p>
         </div>
         <div className={alumnistyles.card}>
             <img  className={alumnistyles.alumimage} src={image9}/>
             <p className={alumnistyles.alumname}>Name 1</p>
             <p className={alumnistyles.alumpost}>Post 1</p>
             <p className={alumnistyles.alumbatch}>Batch 1</p>
         </div>
    </div>
    </>
   

  )
}

export default Alumni