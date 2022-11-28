import React from 'react';
import Button from "./Button";


const Counter = ({fruit, setFruit}) => {
    return (
        <article>
            <h2>{fruit}</h2>
            <Button
                onClick={() => setFruit(fruit => fruit - 1)}
                disabled={fruit === 0}
            >-</Button>
                {fruit}
                <Button
                    onClick={() => setFruit(fruit => fruit + 1)}
                >+</Button>
        </article>
    );
};

export default Counter;