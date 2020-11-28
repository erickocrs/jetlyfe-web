import React from "react";
import styled from "styled-components";
import Modal from "components/Modal/Modal";
import Form_Login from "components/Modal_Login/Form_Login"

export const Modal_Login = () => {

    return (
        <Modal modal={"modalLogin"}>
            <Form_Login/>
        </Modal>
    );
}

export default Modal_Login;