import React from 'react';
import styled from 'styled-components'
import {
    HeaderContainer,
    Logo,
    LogoImage,
    Search,
    ButtonSearch,
    ButtonMyAccount,
    ButtonNewVideo,
    ButtonLogin,
    ButtonRegister,
    ButtonLogout,
    InputSearch
} from './Header.styles.js'
import { useDispatch } from "react-redux";
import { APISetToken }  from "services/API";
import {  useSelector } from 'react-redux'

export default function Header() {
        
    const userReducer = useSelector((state) => state.userReducer);


    React.useEffect(()=> {

        console.log("userReducer", userReducer);
        if(userReducer.user && userReducer.user.token)
        {
            APISetToken(userReducer.user.token);
        }
        else
        {
            console.log("exec APISetToken")
            APISetToken();
        }
        
    }, []);
    
    
    const dispatch = useDispatch();
    
    const handlerClickButtonMyAccount = () => {
        dispatch({
            type: "SET_MODAL",
            modalMyAccount : true
        });
    };

    const handlerClickButtonMyNewVideo = () => {
        dispatch({
            type: "SET_MODAL",
            modalNewVideo : true
        });
    };

    const handlerClickButtonLogin = () => {
        dispatch({
            type: "SET_MODAL",
            modalLogin : true
        });
    };

    const handlerClickButtonRegister = () => {
        dispatch({
            type: "SET_MODAL",
            modalRegister : true
        });
    };

    const handlerClickLogOut = () => {   
        console.log("exec handlerClickLogOut")
        APISetToken();
        dispatch({
            type: "SET_USER",
            user : null
        });
    };

    return (
        <HeaderContainer>
            <Logo href="./">
                <LogoImage src={"./logo.svg"}></LogoImage>
            </Logo>
            <ButtonMyAccount
                onClick={handlerClickButtonMyAccount}/>
            <ButtonNewVideo
                onClick={handlerClickButtonMyNewVideo}/>
            <ButtonLogin
                onClick={handlerClickButtonLogin}/>
            <ButtonRegister
                onClick={handlerClickButtonRegister}/>
            <ButtonLogout
                onClick={handlerClickLogOut}/>
            <Search>
                <InputSearch type="text"/>
                <ButtonSearch/>  
            </Search>
        </HeaderContainer>
    );
}