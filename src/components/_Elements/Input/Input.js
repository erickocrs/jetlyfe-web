
import React from "react";
import FormRow from "components/_Elements/FormRow/FormRow"

export const Input = (props) => {
    return (        
        <FormRow
            validation={props.value.validation(props.value)}>
            <label>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                value={props.value.value}
                onChange={props.onChange}/>
        </FormRow>
    )
}

export default Input; 