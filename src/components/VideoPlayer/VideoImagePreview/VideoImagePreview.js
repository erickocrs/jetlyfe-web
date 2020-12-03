import React from 'react';
import styled from 'styled-components';

export const VideoImagePreview = (props) => {
    return (
        <ImagePreview
            previewOn={props.previewOn}
            videoPosterUrl={props.videoPosterUrl}>
        </ImagePreview>
    )
}

const ImagePreview = styled.div`
    position:absolute;
    display:block;
    float:none;

    top:0; left:0;

    width:100%;
    height:auto;
    min-height: 100%;
    padding:0px 0;

    transition:all 2000ms ease;

    background:rgba(29,29,29,1) no-repeat center center;
    background-image : ${(props) => (`url('${ ( process.env.PUBLIC_URL + props.videoPosterUrl ) }')`)};
    background-image:url("http://localhost:3000/tmp/uploads/739fe381c6abea2ce8706422fb22fe81");
    background-size:cover;
    opacity:${(props) => props.previewOn ? 1 : 0};
`;


export default VideoImagePreview;