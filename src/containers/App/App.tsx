import * as React from "react";
import "../../assets/scss/App.scss";
import { Content, Header, Total } from '../../components';

export interface AppProps {
}

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
            <div className="container-app">
                <Header course={course} />
                <Content 
                    part={part}
                />
                <Total
                    part={part}
                />
            </div>
        );
    }
}
