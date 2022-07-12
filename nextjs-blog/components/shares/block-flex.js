import React from 'react';

const BlockFlex = ({children, style, className}) => {

    return <div className={("d-flex " + (className || '')).trim()} style={style}>
            {children}
    </div>

};

BlockFlex.propTypes = {

};

export default BlockFlex;
