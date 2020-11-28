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
    InputSearch
} from './Header.styles.js'
import { useDispatch } from "react-redux";

export default function Header() {
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
            <Search>
                <InputSearch type="text"/>
                <ButtonSearch/>  
            </Search>
        </HeaderContainer>
    );
}