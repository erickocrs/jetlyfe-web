import React from "react";
import styled from "styled-components";
import {  useDispatch, useSelector } from "react-redux";

export function useToast () {
    const dispatch = useDispatch();
   
    return (message, type = "") => {
        dispatch({
            type: "SET_TOAST",
            toast : {
                type : type,
                message : message
            }
        })
    };
}

export const Toast = (props) => {

    const dispatch = useDispatch();

    const toastReducer = useSelector((state) => state.toastReducer);

    const [toastData, setToastData] = React.useState({
        actived: false,
        type:"",
        message:""
    });

    const openToast = (toast) => {
        setToastData({
            actived: true,
            type:toast.type,
            message:toast.message
        });
    }

    const closeToast = () => {        
        setToastData({
            actived: false,
            type:"",
            message:""
        });        
    }
    
    React.useEffect(() => {

        if( toastReducer &&
            toastReducer.toast &&
            toastReducer.toast.message ) {
                    
            dispatch({
                type: "SET_TOAST",
                toast : null
            });

            openToast(toastReducer.toast);
        }

    }, [toastReducer]);

    return (
        <>
        { toastData.actived ? 
            <Box onClick={closeToast}>    
                {toastData.type}
                {toastData.message}
            </Box> 
        : null }
        </>
    );
}

const Box = styled.div`
    position:fixed;
    top:0;
    left:auto;
    right:0;

    width:100%;
    max-width:300px;
    height:100px;

    padding:10px;

    color:#ffffff;
    background:rgba(150,30,30,1);
    
    border-radius:8px;

    z-index:10;

    box-sizing:border-box;
`;

export default Toast;