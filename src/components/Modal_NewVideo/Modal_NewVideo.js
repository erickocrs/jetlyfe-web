import React from "react";
import styled from "styled-components";
import {  useSelector } from "react-redux";
import FormRow from "components/_Elements/FormRow/FormRow"


export const NewVideo_Modal = () => {

    const modalManagerReducer = useSelector((state) => state.modalManagerReducer);
    const [modalActive, setModalActive] = React.useState(modalManagerReducer.modalNewVideo);

    const openModal = () => {
        setModalActive(true);
    }

    const closeModal = () => {        
        setModalActive(false);
    }

    React.useEffect(() => {
        setModalActive(modalManagerReducer.modalNewVideo);
    }, [modalManagerReducer])

    return (
        <Container
            modalActive={modalActive}
            onClick={closeModal}>
            <Modal onClick={(e) => e.stopPropagation(closeModal)}>
                <FormRow>
                    <label>Title</label>
                    <input type="text"/>
                </FormRow>
                <FormRow>
                    <label>Custom Url Title</label>
                    <input type="text"/>
                </FormRow>
                <FormRow>
                    <label>Description</label>
                    <input type="text"/>
                </FormRow>
                <FormRow>
                    <label>Tag List</label>
                    <input type="text"/>
                </FormRow>
            </Modal>
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
    background:rgba(0,0,0,.5);

    z-index:10;
`;

const Modal = styled.div`
    position:relative;
    width:100%;
    max-width:600px;
    height:auto;
    padding:10px;

    background:rgba(255,255,255,.9);
`;

export default NewVideo_Modal;