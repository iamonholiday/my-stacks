import React from 'react';
import PropTypes from 'prop-types';
import style from "./ads.module.scss"

function BlockAds ({children}) {

    const blockClass = [style.block]

    return <div className={blockClass}>

        <img src={'https://stepstraining.co/wp-content/uploads/2020/06/20200613_Google_Ads_VS_Facebook_Ads_Website.png'} />
    </div>
}

const Ads = ({}) => {
    return (
        <div className={style.layout}>

            <BlockAds />

        </div>
    );
};

Ads.propTypes = {

};

export default Ads;
