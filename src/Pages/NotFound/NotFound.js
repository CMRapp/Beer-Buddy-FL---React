import React from "react";
import { Link } from "react-router-dom";
import './notfound.css';

export default function NotFound() {
    return (
        <>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
        </>
    );
}