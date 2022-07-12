import React from 'react';

const BlockForm = ({children, style, className}) => {

    return <div className={("d-flex " + (className || '')).trim()} style={style}>
        {children}
    </div>
};

BlockForm.propTypes = {

};

export default BlockForm;
