import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
  }
`;

const WrapContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;  
    width: 100%;
    line-height: 1.5em;
`;

const NavBar = styled.div`
    border: 2px solid gray;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Navigation = (props) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <WrapContainer>
                <NavBar>
                    <Link to={{pathname: '/part1'}}>Task: Part 1</Link>
                    <Link to={{pathname: '/unicafe'}}>Task: Unicafe</Link>
                    <Link to={{pathname: '/anecdotes'}}>Task: Anecdotes</Link>
                    <Link to={{pathname: '/phonebook'}}>Task: Phonebook</Link>
                    <Link to={{pathname: '/countries'}}>Task: Countries</Link>
                </NavBar>
            </WrapContainer>
        </React.Fragment>
    )
}

export default Navigation;