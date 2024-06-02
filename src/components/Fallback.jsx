import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Fallback = () => {
    return (
        <div className="container">
            <h1 className="heading">404 - Not Found</h1>
            <p className="text">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="link">Go to Home Page</Link>
        </div>
    );
}

export default Fallback;
