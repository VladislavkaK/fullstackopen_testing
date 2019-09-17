import * as React from 'react';

const Total = ({
    part
}) => {

    let total = 0;

    for (let i = 0; i < part.length; i++) {
        total += part[i].exercises;
    }

    return (
        <div className="total" >
            <p>Number of exercises: {total} </p>
        </div>
    )
}

export default Total;