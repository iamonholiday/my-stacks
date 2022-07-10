import PropTypes from 'prop-types';
import Navbar from "../shares/navbar";
import PageHeader from "../shares/page-header";
import PageFooter from "../shares/page-footer";
import Ads from "../ads";
import SideBar from "../shares/side-bar";

export const BlockArea = ({children, blockType, placeType = 'default'}) => {

    let defaultBlock
    let wrapperType

    if (blockType.indexOf("head-") > -1) {

        wrapperType = "head"
    } else if (blockType.indexOf("nav-") > -1) {

        wrapperType = "nav"
    } else if (blockType.indexOf("footer-") > -1) {

        wrapperType = "footer"
    } else {

        wrapperType = "section"
    }

    if (blockType === 'page-header-area') {

        defaultBlock = <PageHeader />
    } else if (blockType === 'page-ads-area'){

        defaultBlock = <Ads />
    } else if (blockType === 'page-footer-area'){

        defaultBlock = <PageFooter />
    } else if (blockType === 'page-navbar-area') {

        defaultBlock = <Navbar />
    } else if (blockType === 'page-sidebar-area') {

        defaultBlock = <SideBar />
    } else if (children) {

        defaultBlock = children
    } else {

        defaultBlock = <></>
    }

    if (wrapperType === "header") {

        return <header className={blockType}>
            { placeType === 'top' && children }
            { defaultBlock }
            { placeType === 'bottom' && children }
        </header>
    } else if (wrapperType === "footer") {

        return <footer className={blockType}>
            { placeType === 'top' && children }
            { defaultBlock }
            { placeType === 'bottom' && children }
        </footer>
    } else {

        return <section className={blockType}>
            { placeType === 'top' && children }
            { defaultBlock }
            { placeType === 'bottom' && children }
        </section>
    }
}

BlockArea.propTypes = {

    blockType : PropTypes.oneOf([
        'page-footer-area',
        'page-extended-area',
        'page-header-area',
        'page-nav-area',
        'page-main-area',

        'page-ads-area',
        'page-sidebar-area',

    ]).isRequired,

    placeType: PropTypes.oneOf([
        'top','bottom','default','replace'
    ])
}
