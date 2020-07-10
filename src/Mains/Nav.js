import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav>
                <button><Link to='/app'>App</Link></button>
                <button><Link to='/main/1'>Main1</Link></button>
                <button><Link to='/main/2'>Main2</Link></button>
                <button><Link to='/main/3'>Main3</Link></button>
            </nav>
        </div>
    );
};

export default Nav;
