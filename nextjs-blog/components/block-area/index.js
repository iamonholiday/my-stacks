import PropTypes from 'prop-types';
import styles from "../shares/layout.module.scss";
import Navbar from "../shares/navbar";
import PageHeader from "../shares/page-header";
import Footer from "../shares/footer";
import Ads from "../ads";

export const BlockArea = ({children, blockType, placeType = 'default'}) => {


    let defaultBlock

    if (blockType === 'head-area') {

        defaultBlock = <>
            <Navbar />
            <PageHeader />

        </>
    } else if (blockType === 'ads-area'){

        defaultBlock = <>
            <Ads />
        </>
    } else if (blockType === 'bottom-area'){

        defaultBlock = <>
            <Footer />
        </>
    } else if (children) {

        defaultBlock = children
    } else {

        defaultBlock = <></>
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
