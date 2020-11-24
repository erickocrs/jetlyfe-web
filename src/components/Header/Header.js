import React from 'react';
import styled from 'styled-components'
import {
    HeaderContainer,
    Logo,
    LogoImage,
    Search,
    ButtonSearch,
    ButtonMyAccount,
    InputSearch
} from './Header.styles.js'
import { useDispatch } from "react-redux";

export default function Header() {
    const dispatch = useDispatch();

    const ButtonMyAccountClick = () => {
        dispatch({
            type: "SET_MODAL_MY_ACCOUNT",
            modalMyAccount : true
        });
    };

    return (
        <HeaderContainer>
            <Logo href="./">
                <LogoImage src={"./logo.svg"}></LogoImage>
            </Logo>
            <ButtonMyAccount
                onClick={ButtonMyAccountClick}/>
            <ButtonNewVideo
                onClick={}/>
            <Search>
                <InputSearch type="text"/>
                <ButtonSearch/>  
            </Search>
        </HeaderContainer>
    );
}