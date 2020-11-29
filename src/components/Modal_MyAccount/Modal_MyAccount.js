import React from "react";
import styled from "styled-components";
import Modal from "components/Modal/Modal";
import API from "services/API";
import {  useSelector } from "react-redux";

export const Modal_MyAccount = () => {

    const userReducer = useSelector((state) => state.userReducer);
    const [myAccountData, setMyAccountData] = React.useState("");

    const requestUserInfo = () => {

      if(userReducer.user && userReducer.user.token){
        API.get("/user")
          .then((res) => {
            console.log(res)
            setMyAccountData(res);
          })
          .catch((error) => {
            console.error(error)
          });
      }
      else{
        
        setMyAccountData("");
      }
    }

    React.useEffect(() => {
        requestUserInfo();
    }, [userReducer])

    React.useEffect(() => {
        requestUserInfo();
    }, [])
    
    return (
        <Modal modal={"modalMyAccount"}>
            My Account      
            <code>
            { JSON.stringify(myAccountData) }          
            </code>
        </Modal>
    );
}

export default Modal_MyAccount;