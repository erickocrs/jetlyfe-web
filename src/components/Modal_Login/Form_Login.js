import React from "react";
import styled from "styled-components";
import Button from "components/_Elements/Button/Button"
import Input from "components/_Elements/Input/Input"
import Validation from '../../utils/Validation';
import API from "services/API";

export const Form_Login = () => {

    const [formData, setFormData] = React.useState({
        username : { value : "", init : true, validation : Validation.usernameValidation },
        password : { value : "", init : true, validation : Validation.usernameValidation }
    });
    
    const handleFormChange = (e) => {
        setFormData({
                 ...formData,
                [e.target.name] : { ...formData[e.target.name], value : e.target.value, init : false }
             }
        );
     }

    const handleLogin = () => {

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

        if(validated)
        {
            API.post(
                "/users/login",
                { user : formData },
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
                label="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleFormChange}/>
            <Input
                label="password"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleFormChange}/>
            <Button
                onClick={handleLogin}>
                Save
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