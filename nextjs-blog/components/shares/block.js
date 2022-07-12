import React from 'react';

const Block = ({children, style = {}, className, adj, flex}) => {

    if (flex) {
        style["flex"] = flex
    }

    return <div className={((className || '')).trim()}
                style={style}
                adj={adj}>
        {children}
    </div>

};

Block.propTypes = {

};

export default Block;
