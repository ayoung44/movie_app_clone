import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="navigation__container">
            <Link to="/" className="linked">HOME</Link>
            <Link to="/about" className="linked">ABOUT</Link>
        
        </div>
    );
}

export default Navigation;