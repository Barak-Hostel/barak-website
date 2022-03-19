import React from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Gallery</h1>
            </div>
            <div className={styles.img_box}>
                <div className={styles.img_title}></div>
                <div className={styles.img_preview}></div>
            </div>
        </div>
    );
};

export default Gallery;
