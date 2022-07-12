import React from 'react';

const ElemP = ({children, style = {}, className = "p-0 m-0", adj, flex}) => {


    return <p className={((className || '')).trim()}
                style={style}
                adj={adj}>
        {children}
    </p>

};

ElemP.propTypes = {

};

export default ElemP;
