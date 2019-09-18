import * as React from 'react';
import { Statistic } from '../../components';

const Statistics = ({ average, positive, good, neutral, bad, total }) => {

    if (good === 0 && neutral === 0 && bad === 0) {
        return <p>No feedback given</p>
    }

    return (
        <React.Fragment>
            <h2>statistics</h2>
            <table>
                <tbody>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />
                    <Statistic text="total" value={total} />
                    <Statistic text="average" value={average} />
                    <Statistic text="positive" value={positive} />
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Statistics;