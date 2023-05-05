import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.logo}>
               <a> 
               <Image src="/img/logo-site.png" width="180" height="80" ></Image>
               </a>
            </div>
            <div className={styles.navigationlinks}>
            <Link legacyBehavior href="/">
                    <a className={styles.navlink}>Home</a>
                </Link>
                <Link legacyBehavior href="/">
                    <a className={styles.navlink}>Menu</a>
                </Link>
                <Link legacyBehavior href="/">
                    <a className={styles.navlink}>Events</a>
                </Link>
                <Link legacyBehavior href="/">
                    <a className={styles.navlink}>Private Events</a>
                </Link>
                <Link legacyBehavior href="/about">
                    <a className={styles.navlink}>About</a>
                </Link>
                <Link legacyBehavior href="/">
                    <a className={styles.navlink}>Contact</a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar