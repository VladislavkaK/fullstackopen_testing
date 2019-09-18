import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ course }) => {
    return (
        <div className="header" >
            <Link to={{pathname: '/'}}>На главную</Link>
            <h1>{course}</h1>
        </div>
    )
}

export default Header;