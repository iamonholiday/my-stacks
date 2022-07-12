import React from 'react';

const BlockFlexStack = ({children, style, className}) => {

    return <div className={`d-flex w-100 vstack ${className || ''}`.trim()} style={style}>
        {children}
    </div>

};

BlockFlexStack.propTypes = {

};

export default BlockFlexStack;
