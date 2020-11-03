import React from 'react';
import styled from 'styled-components'
import ScrollContainer from 'react-indiana-drag-scroll'

export const ScrollSauce = (props) => {

    return (
        <ScrollContainerCrop>
            <ScrollContainerBox
                horizontal={props.horizontal}
                vertical={props.vertical}>
                <ScrollContainer
                    className={`scroll-container scroll-container-list ${props.vertical ? "scroll-vertical" : "" }`}
                    horizontal={props.horizontal}
                    vertical={props.vertical}
                    hideScrollbars={false}
                    nativeMobileScroll={false}>
                        {props.children}
                </ScrollContainer>
            </ScrollContainerBox>
        </ScrollContainerCrop>
    );
}

const ScrollContainerCrop = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
`;

const ScrollContainerBox = styled.div`
    width:${props => ( props.vertical ? "calc(100% + 20px)" : "100%" )};
    height:${props => ( props.horizontal ? "calc(100% + 20px)" : "100%" )};

    @media (max-width: 768px) {
        width:100%;
        height:100%;
    }

    
`;



export default ScrollSauce;