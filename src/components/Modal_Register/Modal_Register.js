import React from "react";
import styled from "styled-components";
import Modal from "components/Modal/Modal";
import Form_Register from "components/Modal_Register/Form_Register"

export const Modal_Register = () => {

    return (
        <Modal modal={"modalRegister"}>
            <Form_Register/>
        </Modal>
    );
}

export default Modal_Register;