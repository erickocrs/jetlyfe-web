import React from 'react';
import styled from 'styled-components'
import {
    HeaderContainer,
    Logo,
    Search,
    ButtonSearch,
    InputSearch
} from './Header.styles.js'

export default function Header() {

    return (
        <HeaderContainer>
            <Logo href="./">JEHT</Logo>
            <Search>
                <InputSearch type="text"/>
                <ButtonSearch/>  
            </Search>
        </HeaderContainer>
    );
}