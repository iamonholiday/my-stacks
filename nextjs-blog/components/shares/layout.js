import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';
import Navbar from "./navbar";
import Footer from "./footer";
import PageHeader from "./page-header";
import {BlockArea} from "../block-area";
import BlockLayout from "./block-layout";
import PropTypes from "prop-types";


const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';



export default function Layout({ children, home, layout = 'layoutDefault' }) {
    return <>

        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle,
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <div className={styles[layout]}>

            {children}

        </div>
    </>;
}

Layout.propTypes = {

    layout : PropTypes.oneOf([
        'layoutProfileCenter',
        'layoutDefault',
    ]).isRequired
};
