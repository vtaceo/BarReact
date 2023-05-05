import Head from 'next/head';
import Image from 'next/image';
import {
    Inter
} from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Featured from '@/components/Featured';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Gallery from '@/components/Gallery'


const inter = Inter({
    subsets: ['latin']
})

export default function Home() {
    return ( <
            div className = {
                styles.container
            } >
            <
            Head >
            <
            title > Balones Sports Bar & Billar < /title> <
            meta name = "description"
            content = "Bar in DFW" / >
            <
            meta name = "viewport"
            content = "width=device-width, initial-scale=1" / >
            <
            link rel = "icon"
            href = "/favicon.ico" / >
            <
            /Head> {
            /* <Navbar></Navbar> */
        } <
        Featured > < /Featured>  <
    About > < /About> <
    Gallery > < /Gallery> < /
        div >
)
}