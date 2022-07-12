import React from 'react';

const ElemButton = ({children, style = {}, className = "", adj, flex}) => {


    return <button className={`btn ${className}`}
              style={style}
              adj={adj}>
        {children}
    </button>

};

ElemButton.propTypes = {

};

export default ElemButton;
