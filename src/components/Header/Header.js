import React from 'react';
import styled from 'styled-components'
import {
    HeaderContainer,
    Logo,
    LogoImage,
    Search,
    ButtonSearch,
    InputSearch
} from './Header.styles.js'

export default function Header() {

    return (
        <HeaderContainer>
            <Logo href="./">
                <LogoImage src={"./logo.svg"}></LogoImage>
            </Logo>
            <Search>
                <InputSearch type="text"/>
                <ButtonSearch/>  
            </Search>
        </HeaderContainer>
    );
}