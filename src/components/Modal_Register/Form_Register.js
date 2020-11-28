import React from "react";
import styled from "styled-components";
import Button from "components/_Elements/Button/Button"
import Input from "components/_Elements/Input/Input"
import Validation from '../../utils/Validation';
import API from "services/API";

export const Form_Login = () => {

    const [formData, setFormData] = React.useState({
        email : { value : "", init : true, validation : Validation.usernameValidation },
        username : { value : "", init : true, validation : Validation.usernameValidation },
        password : { value : "", init : true, validation : Validation.passwordValidation }
    });
    
    const handleFormChange = (e) => {
        setFormData({
                 ...formData,
                [e.target.name] : { ...formData[e.target.name], value : e.target.value, init : false }
             }
        );
     }

    const handleClickLogin = () => {

        let newFormData = formData;
        Object.entries(newFormData).map(([key, value]) => {
            newFormData = {...newFormData, [key] : { ...value, init : false } };
        });

        let validated = true;
        Object.entries(newFormData).map(([key, value]) => {
            if(newFormData[key].validation(value) === false) {
                validated = false;
            }
        });

        setFormData(newFormData);
        
        console.log("validated", validated);
        console.log("newFormData", newFormData);

        const APIData = {
            user : {
                email : formData.email.value,
                username : formData.username.value,
                password : formData.password.value
            }
        };

        if(validated)
        {
            API.post(
                "/users",
                APIData,
                (response) => {

                    console.log("response", response);
            });
        }
        else
        {
            return false;
        }        
    }

    return (
        <Form>
            <Input
                label="email"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleFormChange}/>
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
                Register
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