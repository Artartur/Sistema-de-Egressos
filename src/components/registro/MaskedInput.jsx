import React from 'react';
import InputMask from 'react-input-mask';

const MaskedInput = ({value, onChange}) =>{
    return (
        <InputMask
        className="input"
        mask="999.999.999-99"
        onChange={onChange}
        placeholder='CPF'
        value={value}
        />
    )
}

export default MaskedInput;