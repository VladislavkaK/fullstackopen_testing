import * as React from 'react';
import { useState } from 'react';
import { GlobalStyle } from '../../containers/App/App';
import { Header } from '../../components';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
`;

const Content = styled(Container)`
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const ContainerButtons = styled.div`
    display: flex;
`;

const Button = styled.button`
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 10px;
    width: 130px;
`;

const Anecdotes = () => {
    const [selected, setSelected] = useState(0);

    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ];

    const dataVote = new Array(anecdotes.length + 1).join('0').split('').map(parseFloat);
    const [copyDataVote, setCopyDataVote] = useState(dataVote);

    const onChangeAnecdote = () => {
        const min = 0;
        const max = 5;

        const rand = min - 0.5 + Math.random() * (max - min + 1);

        setSelected(Math.floor(rand));
    }

    const onChangeVoteAnecdote = () => {
        setCopyDataVote(copyDataVote => {
            copyDataVote[selected] += 1;

            return [
                ...copyDataVote,
            ]
        })
    }

    const renderBestAnecdote = () => {
        if (copyDataVote[selected] === 0) {
            return (
                <Content>
                    {anecdotes[0]} <br />
                    has {copyDataVote[0]} votes
                </Content>
            )
        }

        return (
            <React.Fragment>
                {Math.max.apply(null, copyDataVote) && <Content>
                    {anecdotes[selected]} <br />
                    has {copyDataVote[selected]} votes
                </Content>} 
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <GlobalStyle />
            <Container>
                <Header course="Anecdote of the day" />
                <Content>
                    {anecdotes[selected]} <br />
                    has {copyDataVote[selected]} votes
                    <ContainerButtons>
                        <Button onClick={onChangeVoteAnecdote} >vote</Button>
                        <Button onClick={onChangeAnecdote} >Next anecdote</Button>
                    </ContainerButtons>
                </Content>
                <h1>Anecdote with most votes</h1>
                {renderBestAnecdote()}
            </Container>        
        </React.Fragment>
    )
}

export default Anecdotes;