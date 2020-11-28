import React from "react";
import styled from "styled-components";
import {  useSelector } from "react-redux";

export const Modal = (props) => {

    const modalManagerReducer = useSelector((state) => state.modalManagerReducer);
    const [modalActive, setModalActive] = React.useState(modalManagerReducer[props.modal]);    

    const openModal = () => {
        setModalActive(true);
    }

    const closeModal = () => {        
        setModalActive(false);
    }
    
    React.useEffect(() => {
        setModalActive(modalManagerReducer[props.modal]);
    }, [modalManagerReducer])

    return (
        <Container
            modalActive={modalActive}
            onClick={closeModal}>
            <Box onClick={(e) => e.stopPropagation(closeModal)}>                
                {props.children}
            </Box>
        </Container>
    );
}

const Container = styled.div`
    position:fixed;
    display:${ props => props.modalActive ? "flex" : "none" };
    flex-direction:column;
    align-items:center;
	justify-content: center;

    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.3);

    z-index:10;
`;

const Box = styled.div`
    position:relative;
    width:100%;
    max-width:600px;
    height:auto;
    padding:10px;

    color:#ffffff;
    background:rgba(30,30,30,1);
    
    border-radius:5px;

    box-sizing:border-box;
    padding:30px;
`;

export default Modal;