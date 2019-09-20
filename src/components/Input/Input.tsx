import * as React from 'react';

interface IInputProps {
    type: string;
    value?: any;
    onChange?: any;
}

const Input: React.FC<IInputProps> = ({ type, value, onChange }) => {
    return (
        <input type={type} value={value} onChange={onChange} />
    )
}

export default Input;