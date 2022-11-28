import React from 'react';

function InputFields(fieldName, setFieldName, labelName, inputType, value) {
    return (
        <>
            <label htmlFor={fieldName}>{labelName}</label>
            <input
                name={fieldName}
                value={value}
                id={fieldName}
                type={inputType}
                onChange={(event) => setFieldName(event.target.value)}
            />
        </>
    );
}

export default InputFields;