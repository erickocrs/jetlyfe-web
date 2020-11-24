import styled from 'styled-components'

export const HeaderContainer = styled.header`
    position:relative;
    display:block;
    float:left;

    width:100%;
    height:40px;
    padding:0px 0;
    background:rgba(30,30,30,1);

    z-index: 1;

    border-bottom:1px solid rgba(0,0,0,.1);
`;

export const Logo = styled.a`
    position:absolute;
    display:block;    
    
    text-decoration:none;    
    padding:0px;
    font-size:12px;
    color:rgba(255,255,255,.7);

`;

export const LogoImage = styled.img`
    position:relative;  
    width:60px;
    margin:9px 0 0 15px
`;

const SearchHeight = "40px";

export const Search = styled.div`
    position:relative;
    display:table;
    float:right;
    margin:0px auto;
    width:auto;
    height:${SearchHeight};
`;

export const ButtonSearch = styled.div`
    position:relative;
    display:block;
    float:left;
    background:rgba(0,0,0,.01);
    width:40px;
    height:${SearchHeight};
    cursor:pointer;
`;

export const ButtonMyAccount = styled.div`
    position:relative;
    display:block;
    float:right;
    background:rgba(70,15,200,1);
    width:40px;
    height:${SearchHeight};
    cursor:pointer;

`;

export const InputSearch = styled.input`
    position:relative;
    display:block;
    float:left;
    height:${SearchHeight};
    background:rgba(255,255,255,.05);
    color:#ffffff;
    padding:0px 15px;
`;
