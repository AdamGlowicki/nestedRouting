import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <button><Link to='/main'>Main</Link></button>
            <button><Link to='/app/1'>App1</Link></button>
            <button><Link to='/app/2'>App2</Link></button>
        </nav>
    );
};

export default Nav;
