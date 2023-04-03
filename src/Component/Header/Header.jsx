import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
                <Link to="/posts">posts</Link>
            </nav>
        </div>
    );
};

export default Header;