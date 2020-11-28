import React from 'react';
import styled from 'styled-components'

export default function Button(props) {

    return (
        <Box onClick={props.onClick}>
            <Content>
                {props.children}
            </Content>
        </Box>
    );
}

const Box = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    width:100%;
    height:30px;
    background:rgba(0,120,0,1);

    cursor:pointer;
`;

const Content = styled.div`
    width:auto;
    height:auto;
`;