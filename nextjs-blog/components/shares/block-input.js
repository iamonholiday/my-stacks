import React from 'react';

const BlockInput = ({children, style = {}, className, adj, flex,flag = "default" , label, hint, blockStyle = "common"}) => {

    if (flex) {
        style["flex"] = flex
    }

    return <div className={((className || '')).trim()}
                style={style}
                adj={adj}>

        <label>{label}</label>

        {children}

        {/*validation*/}

    </div>

};

BlockInput.propTypes = {

};

export default BlockInput;
