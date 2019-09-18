import * as React from 'react';
import { useState, useEffect } from 'react';
import { Header, Statistics } from '../../components';
import styled from 'styled-components';
import { GlobalStyle, Container } from '../../containers/App/App';

const Content = styled.div`
    border: 1px solid blue;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled.button`
    width: 80px;
    height: 30px;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
`;

const ContainerButtons = styled.div`
    display: flex;
`;

const Unicafe = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [average, setAverage] = useState(0);
    const [positive, setPositive] = useState(0);

    const setToGood = () => {
        setGood(good => good + 1)
    }

    const setToNeutral = () => {
        setNeutral(good => good + 1)
    }

    const setToBad = () => {
        setBad(good => good + 1)
    }

    const totalFeedback = () => {
        setTotal(good + neutral + bad);
    }

    const averageFeedback = () => {
        setAverage(Math.floor((total / 3) * 100) / 100);
    }

    const positiveFeedback = () => {
        if (good !== 0) {
            const result = (good / total) * 100;
            setPositive(Math.floor(result * 100) / 100);
        }
    }

    useEffect(() => {
        totalFeedback();
        averageFeedback();
        positiveFeedback();
    })

    return (
        <React.Fragment>
            <GlobalStyle />
            <Container>
                <Header course='Unicafe' />
                <Content>
                    <h2>give feedback</h2>
                    <ContainerButtons>
                        <StyledButton onClick={() => setToGood()} >good</StyledButton>
                        <StyledButton onClick={() => setToNeutral()}>neutral</StyledButton>
                        <StyledButton onClick={() => setToBad()}>bad</StyledButton>
                    </ContainerButtons>
                    
                    <Statistics average={average} positive={positive} good={good} neutral={neutral} bad={bad} total={total} />
                </Content>
            </Container>
        </React.Fragment>
    )
}

export default Unicafe;