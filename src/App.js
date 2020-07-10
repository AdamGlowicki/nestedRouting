import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './Main';
import Application from './Application';
import Users from './Users';
import {Redirect} from 'react-router';

const App = props => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={() => <Redirect to='/main'/>}/>
                    <Route path='/main' component={Main}/>
                    <Route path='/app' component={Application}/>
                    <Route path='/users' component={Users}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

App.propTypes = {};

export default App;
