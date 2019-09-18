import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from '../../components';
import { App, Unicafe, Anecdotes } from '../../containers';

const RootRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={Navigation} />
            <Route path='/part1' component={App} />
            <Route path='/unicafe' component={Unicafe} />
            <Route path='/anecdotes' component={Anecdotes} />
        </Switch>
    )
}

export default RootRoute;