import React from 'react';
import styled from 'styled-components'

export const VideoImagePreview = (props) => {

    const Image = styled.img`
        position:absolute;
        display:block;
        float:none;
        
        top:0; left:0;

        width:100%;
        height:auto;
        padding:0px 0;

        z-index: 1;
        
        opacity:${ props => (props.previewStatus === "true" ? 1 : 0) };
        transition:all 200ms ease;
    `;
    
    return (  
        <>
        <Image
            previewStatus={props.previewStatus}
            src={props.videoPosterUrl} />
        </>
    )
};

export default VideoImagePreview;