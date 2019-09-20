import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from '../../components';
import { App, Unicafe, Anecdotes, Phonebook, Countries } from '../../containers';

const RootRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={Navigation} />
            <Route path='/part1' component={App} />
            <Route path='/unicafe' component={Unicafe} />
            <Route path='/anecdotes' component={Anecdotes} />
            <Route path='/phonebook' component={Phonebook} />
            <Route path='/countries' component={Countries} />
        </Switch>
    )
}

export default RootRoute;