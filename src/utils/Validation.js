import React from 'react';

export const Validation = {

    nameValidation : (name) => {
        if(name.init)
        { return true }

        if(name.value.length < 1)
        { return false; }
        else
        { return true; }        
    },
    usernameValidation : (username) => {
        if(username.init)
        { return true }

        if(!username.value || (username.value && username.value.length < 1 ))
        { return false; }
        else
        { return true; }        
    },
     passwordValidation : (password) => {
        if(password.init)
        { return true }
        
        if(password.value.length < 1)
        { return false; }
        else
        { return true; }        
    }
    ,allFieldsValidation : (user) => {
        user.username.init = false;
        user.password.init = false;        
        if(
            Validation.usernameValidation(user.username) &&
            Validation.passwordValidation(user.password)
        )
        {return true}
        else
        {return false}
    }
    ,allFieldsValidationRegister : (user) => {
        user.name.init = false;
        user.username.init = false;
        user.password.init = false;
        if(
            Validation.nameValidation(user.name) &&
            Validation.usernameValidation(user.username) &&
            Validation.passwordValidation(user.password)
        )
        {return true}
        else
        {return false}
    }
}

export default Validation;