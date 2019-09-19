import * as React from 'react';
import { Total } from '../../components';
import styled from 'styled-components';

const ContainerCourse = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
`;

const Content = ({
    part
}) => {
    return (
        <>
            
            {part.map((data, index) => {
                return (
                    <ContainerCourse key={index} >
                        <h3>{data.name}</h3>
                        <Total parts={data.parts} />
                    </ContainerCourse>
                )
            })}
        </>
    )
}

export default Content;
