import * as React from "react";
import "../../assets/scss/App.scss";
import { Content, Header, Total } from '../../components';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
 
export interface AppProps {
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
  }
`;

export const Container = styled.div`
  padding: 40px;
`;

export default class App extends React.Component<AppProps, undefined> {
    render() {
        const course = 'Half Stack application development';
        const part = [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ];

        return (
            <React.Fragment>
                <GlobalStyle />
                <Container>
                    <Header course={course} />
                    <Content 
                        part={part}
                    />
                    <Total
                        part={part}
                    />
                </Container>
            </React.Fragment>
        );
    }
}
