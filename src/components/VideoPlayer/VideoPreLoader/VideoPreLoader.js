import React from 'react';
import styled, { keyframes } from 'styled-components';

export const VideoPreLoader = (props) => {
    return (
        <Preloader>
            <Container>
                <Loader></Loader>
            </Container>
        </Preloader>
    )
}

const Preloader = styled.div`
    position:absolute;
    display:block;
    float:none;

    top:0; left:0;

    width:100%;
    height:100%;
`;

const Container = styled.div`
    position:absolute;
    display:block;
    float:none;

    top:50%; left:50%;

    width:70px;
    height:70px;

    transform:translate(-50%,-50%);
`;

const RotateAnimation = keyframes`  
    0% { transform: rotate(0); }
    50% { transform: rotate(1080deg); }
    100% { transform: rotate(0); }
`;

const Loader = styled.div`
    position:absolute;
    display:block;
    float:none;

    top:0; left:0;

    width:100%;
    height:100%;

    animation:8s ${RotateAnimation} ease 0s infinite;

    border-radius:50%;
    border-top:4px solid rgba(255,255,255,.6);
    border-right:4px solid rgba(255,255,255,.6);
    border-left:4px solid  rgba(255,255,255,.6);
    border-bottom:4px solid rgba(255,255,255,0);

    box-sizing:border-box;

`;

export default VideoPreLoader;