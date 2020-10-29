import styled from 'styled-components';

export const VideoShadow = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    box-shadow: 0px 3px 4px 1px rgba(0,0,0,.2) inset;
    background:rgba(0,0,0,.5);

    opacity:${props => props.shadowOn? 1: 0};

    transition:all 200ms ease;
`;