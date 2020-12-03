import React from 'react'
import styled from 'styled-components'
import API from 'services/API'
import {  useDispatch } from "react-redux";

export const Search = () => {
    const dispatch = useDispatch();

    const [searchData, setSearchData] = React.useState({
        value : "",
    });

    const goSearch = () => {

        dispatch({
            type: "SET_SEARCH",
            search : searchData.value
        });
    }

    const handleInputSearchChange = (e) => {
        setSearchData({...searchData, value : e.target.value});
    }

    return (
        <Box>
            <InputSearch
                value={searchData.value}
                type="text"
                onChange={handleInputSearchChange}/>
            <ButtonSearch onClick={goSearch}/>  
        </Box>
    )
}


const SearchHeight = "40px";

const Box = styled.div`
    position:relative;
    display:table;
    float:right;
    margin:0px auto;
    width:auto;
    height:${SearchHeight};
`;

const ButtonSearch = styled.div`
    position:relative;
    display:block;
    float:left;
    background:rgba(0,0,0,.01);
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

export default Search;