import React from 'react';
import { Link } from "react-router-dom";
import icon from '../images/icon.png';

const Nav = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h2>Home</h2></Link>
            <img src={icon} alt='icon' />
            <Link to="/mylist"><h2>My List</h2></Link>
        </nav>
    );
};


export default Nav;