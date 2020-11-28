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
}

export default Validation;