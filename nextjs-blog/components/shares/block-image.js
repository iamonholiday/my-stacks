import React from 'react';
import styled from "styled-components"
import PropTypes from 'prop-types';

const ImageHolder = styled.img`
    
    
`

const BlockImage = ({style, className = "img-thumbnail",src, alt}) => {

    return <ImageHolder className={((className || '')).trim()}
                        style={style}
                        src={src}
                        alt={alt}
    />



};

BlockImage.propTypes = {

};

export default BlockImage;

