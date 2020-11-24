import React from 'react';
import styled from 'styled-components';

export const VideoProgressBar = (props) => {
    const progressContainerRef = React.useRef(null);

    const clickProgressHandler = (e) => {
        if(props.barStatus){
            e.stopPropagation();
            let newTimeByPercent = e.pageX - progressContainerRef.current.getBoundingClientRect().left;
            newTimeByPercent = newTimeByPercent * 100 / progressContainerRef.current.getBoundingClientRect().width;
            props.setVideoNewTimeByPercent(newTimeByPercent);
        }
    }
    
    return (
        <ProgressContainer
            barStatus={props.barStatus}
            ref={progressContainerRef}
            onClick={clickProgressHandler} >
            <LineBox timePercent={props.timePercent}>
                <LineBefore/>
                <TimeMarker/>
                <Line/>
            </LineBox>
        </ProgressContainer>
    );    
}

const ProgressContainer = styled.div`
    position:absolute;
    display:block;
    top:auto;
    bottom:0px;
    left:0%;
    width:100%;
    height:50px;
    z-index:2;
    overflow:hidden;

    opacity:${props => props.barStatus ? 1 : 0 };
    transition:all 900ms ease;
`;

const LineBox = styled.div`
    position:relative;
    display:block;
    width:100%;
    height:50px;
    transform:translate(${props => props.timePercent ? props.timePercent + "%" : "0" }, 0px);
    transition:all 50ms ease-in-out;
`;

const LineBefore = styled.div`
    position:absolute;
    display:block;
    width:100%;
    top:auto; bottom:0;
    left:-100%;
    height:0px;    
    border-top:10px solid rgba(0,0,0,.7);
    box-shadow:0px 0px 1px 1px rgba(255,255,255,0.02);
`;

const Line = styled.div`
    position:absolute;
    display:block;
    top:auto; bottom:0;
    left:0;
    width:100%;
    height:0px;    
    border-top:10px solid rgba(0,0,0,.08);
    box-shadow:0px 0px 1px 1px rgba(255,255,255,0.02);
`;

const TimeMarker = styled.div`
    position:absolute;
    display:block;
    top:-2px;
    left:0;
    width:5px;
    height:5px;    
    border-radius:50%;
    background:#151515;
    box-shadow:0px 0px 1px 1px rgba(255,255,255,0.05);
    opacity:0;
`;

export default VideoProgressBar;