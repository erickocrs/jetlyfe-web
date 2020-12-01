import React from "react";
import styled from "styled-components";
import Button from "components/_Elements/Button/Button"
import Input from "components/_Elements/Input/Input"
import Validation from '../../utils/Validation';
import { API, APISetToken } from "services/API";
import { useDispatch } from "react-redux";

export const Form_Login = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = React.useState({
        username : { value : "", init : true, validation : Validation.usernameValidation, error : false },
        password : { value : "", init : true, validation : Validation.passwordValidation, error : false }
    })
    
    const handleFormChange = (e) => {
        setFormData({
                 ...formData,
                [e.target.name] : { ...formData[e.target.name], value : e.target.value, init : false }
             }
        )
     }

    const handleClickLogin = () => {

        let newFormData = formData;
        Object.entries(newFormData).map(([key, value]) => {
            newFormData = {...newFormData, [key] : { ...value, init : false } };
        });

        let validated = true;
        Object.entries(newFormData).map(([key, value]) => {
            const validationResult = newFormData[key].validation(value);

            if(validationResult !== true) {

                console.log(validationResult);
                validated = false;
                newFormData = {...newFormData, [key] : { ...value, error : validationResult } };
            }
        });

        setFormData(newFormData);
        
        console.log("validated", validated);
        console.log("newFormData", newFormData);

        const APIData = {
            user : {
                username : formData.username.value,
                password : formData.password.value
            }
        };

        if(validated) {

            API.post("/users/login", APIData)
            .then((res) => {
                console.log("response", res);
                if(res.data && res.data.user && res.data.user.token)
                {              
                    APISetToken(res.data.user.token);
                    
                    dispatch({
                        type: "SET_USER",
                        user : res.data.user,
                        token : res.data.user.token
                    });       
                }
            });
        }
        else {

            return false;
        }        
    }

    return (
        <Form>
            <Input
                label="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleFormChange}/>
            <Input
                label="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}/>
            <Button
                onClick={handleClickLogin}>
                Login
            </Button>
        </Form>
    );
}

const Form = styled.div`
    position:relative;
    width:100%;
    max-width:600px;
    height:auto;
    padding:10px;

    color:#ffffff;
    background:rgba(30,30,30,1);
    
    border-radius:5px;

    box-sizing:border-box;
    padding:30px;
`;

export default Form_Login;