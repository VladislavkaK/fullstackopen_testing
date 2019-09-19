import * as React from 'react';
import { Part } from '../../components';
import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 700;
`;

const Total = ({
    parts
}) => {

    let total = 0;

    for (let i = 0; i < parts.length; i++) {
        total += parts[i].exercises;
    }

    const renderPart = parts.map((data, index) => {
        return (
            <React.Fragment key={index} >
                <Part name={data.name} exercises={data.exercises} />
            </React.Fragment>
        )
    })

    return (
        <div className="total" >
            {renderPart}
            <Paragraph>Number of exercises: {total} </Paragraph>
        </div>
    )
}

export default Total;