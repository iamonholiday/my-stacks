import PropTypes from 'prop-types';
import styles from "../shares/layout.module.scss";
import Navbar from "../shares/navbar";
import PageHeader from "../shares/page-header";
import Footer from "../shares/footer";

export const BlockArea = ({children, blockType, placeType = 'default'}) => {


    let defaultBlock

    if (placeType === 'default' && blockType === 'head-area') {

        defaultBlock = <>
            <Navbar />
            <header>

                {
                    <PageHeader />
                }

                {/* {home ? (
                        <>
                            <Image
                                priority
                                src="/images/img.png"
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt={name}
                            />
                            <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <Image
                                        priority
                                        src="/images/img.png"
                                        className={utilStyles.borderCircle}
                                        height={108}
                                        width={108}
                                        alt={name}
                                    />
                                </a>
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )}*/}
            </header>
        </>
    } else if (placeType === 'default' && blockType === 'ads-area'){

        defaultBlock = <>
            <img src={'https://stepstraining.co/wp-content/uploads/2020/06/20200613_Google_Ads_VS_Facebook_Ads_Website.png'} />
        </>
    } else if (placeType === 'default' && blockType === 'bottom-area'){

        defaultBlock = <>
            <Footer />
        </>
    }


    if (placeType === 'replace') {

        return <div id={styles[blockType]}>
            {children}
        </div>
    } else if (placeType === 'default' && defaultBlock) {

        return <div id={styles[blockType]}>{defaultBlock}</div>
    }


    return <div id={styles[blockType]}>
        { placeType === 'top' && children }
        { defaultBlock }
        { placeType === 'bottom' && children }
    </div>
}

BlockArea.propTypes = {

    blockType : PropTypes.oneOf([
        'main',
        'header',
        'head-area',
        'bottom-area',
        'ads-area'
    ]).isRequired,

    placeType: PropTypes.oneOf([
        'top','bottom','default','replace'
    ])
}
