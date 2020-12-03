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

export const ButtonMyAccount = styled.div`
    position:relative;
    display:block;
    float:right;
    background:rgba(70,15,200,1);
    width:40px;
    height:${SearchHeight};
    cursor:pointer;

`;

export const ButtonNewVideo = styled.div`
    position:relative;
    display:block;
    float:right;
    background:rgba(200,20,50,1);
    width:40px;
    height:${SearchHeight};
    cursor:pointer;

`;

export const ButtonLogin = styled.div`
    position:relative;
    display:block;
    float:right;
    background:rgba(10,200,50,1);
    width:40px;
    height:${SearchHeight};
    cursor:pointer;

`;

export const ButtonRegister = styled.div`
    position:relative;
    display:block;
    float:right;
    background:rgba(20,60,255,1);
    width:40px;
    height:${SearchHeight};
    cursor:pointer;

`;

export const ButtonLogout = styled.div`
    position:relative;
    display:block;
    float:right;
    background:rgba(15,150,150,1);
    width:40px;
    height:${SearchHeight};
    cursor:pointer;
`;