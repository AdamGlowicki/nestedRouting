import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from './Mains/Nav';
import Main1 from './Mains/Main1';
import Main3 from './Mains/Main3';
import Main2 from './Mains/Main2';

const Main = () => {
    return (
        <>
            <Nav></Nav>
            <Switch>
                <Route path='/main/1' component={Main1}/>
                <Route path='/main/2' component={Main2}/>
                <Route path='/main/3' component={Main3}/>
            </Switch>
        </>
        )
};

export default Main;
