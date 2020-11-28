import React from 'react';
import styled from 'styled-components'

export default function FormRow(props) {

    return (
        <Row 
            validation={props.validation === false ? false : true}>
            {props.children}
        </Row>
    );
}

const Row = styled.div`
    width:100%;
    height:auto;
    margin-bottom:20px;
    
    border:${props => props.validation ? "" : "1px solid red"};

    label{
        font-size:1.6rem;
    }

    input{
        width:100%;
        height:auto;
        height:30px;
        padding:0 5px;
        box-sizing:border-box;
    }
`;