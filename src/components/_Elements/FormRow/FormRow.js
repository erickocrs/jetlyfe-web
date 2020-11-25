import React from 'react';
import styled from 'styled-components'

export default function FormRow(props) {

    return (
        <Row>
            {props.children}
        </Row>
    );
}

const Row = styled.div`
    width:100%;
    height:auto;
`;