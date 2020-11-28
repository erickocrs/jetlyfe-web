import React from "react";
import styled from "styled-components";
import Modal from "components/Modal/Modal";
import Form_NewVideo from "components/Modal_NewVideo/Form_NewVideo"

export const Modal_NewVideo = () => {

    return (
        <Modal modal={"modalNewVideo"}>
            <Form_NewVideo/>
        </Modal>
    );
}

export default Modal_NewVideo;