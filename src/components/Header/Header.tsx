import * as React from 'react';

const Header = ({ course }) => {
    return (
        <div className="header" >
            <h1>{course}</h1>
        </div>
    )
}

export default Header;