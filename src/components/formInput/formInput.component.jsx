import React from 'react';
import "./formInput.styles.scss"

const FormInput = ({label, type, name, value, onChange, required}) => {
    return (
        <div className="formInput">
            <span className="label">{label}</span><br/>
            <input
                className="input"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
}

export default FormInput;
