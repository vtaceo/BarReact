import styles from "../styles/Gallery.module.css";
import Image from "next/image";

const About = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.gallery}>
                <div className={styles.galleryimg}>
                    <Image src="/img/gallery.jpg" width="400" height="400" className={styles.img}></Image>
                </div>
                <div className={styles.galleryimg}>
                    <Image src="/img/gallery2.jpg" width="400" height="400" className={styles.img}></Image>
                </div>
                <div className={styles.galleryimg}>
                    <Image src="/img/gallery2.jpg" width="400" height="400" className={styles.img}></Image>
                </div>
                <div className={styles.galleryimg}>
                    <Image src="/img/gallery.jpg" width="400" height="400" className={styles.img}></Image>
                </div>
            </div>
        </div>
    )
}

export default About;
