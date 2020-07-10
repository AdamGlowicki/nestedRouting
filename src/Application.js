import React from 'react';
import {Switch} from 'react-router-dom';
import Nav from './Apps/Nav';
import {Route} from 'react-router';
import App1 from './Apps/App1';
import App2 from './Apps/App2';

const Application = () => {
    return (
        <>
            <Nav></Nav>
            <Switch>
               <Route path='/app/1' component={App1}></Route>
               <Route path='/app/2' component={App2}></Route>
            </Switch>
            </>
    );
};

export default Application;
