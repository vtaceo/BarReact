import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/alex-haney-CAhjZmVk5H4-unsplash.jpg",
        "/img/edward-howell-vvUy1hWVYEA-unsplash.jpg",
        "/img/louis-hansel-yLUvnCFI500-unsplash.jpg",
    ];

    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

    console.log(index)

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
                <Image src="/img/arrowleft.png" width="54" height="54"></Image>  
            </div>
            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img, i) => (
                <div className={styles.imgContainer} key={i}>
                    <Image src={img} alt="" fill objectFit="cover" />
                </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")}>
                <Image src="/img/arrowright.png" width="54" height="54"></Image>  
            </div>
            <div className={styles.landing}>
            <div className={styles.landingtext}>
                <h1>Balones Sports Bar</h1>
                <h3>Grand Prairie</h3>
            </div>
            </div>
        </div>
    )
}

export default Featured;

