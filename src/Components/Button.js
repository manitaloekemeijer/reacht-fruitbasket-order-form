import React from 'react';

function Button ({onClick, disabled, children})  {
    return (
        <>
            <button
                type="button"
                onClick={onClick}
                disabled={disabled||false}
            >
                {children}
            </button>
        </>
    );
}

export default Button;