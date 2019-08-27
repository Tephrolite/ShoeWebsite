import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Page.css';

class Users extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="Page">
                    <div className="Header">
                        <Link to={'/'}  className="websiteTitleContainer">
                            <h1 className="websiteTitleText">Chicken Nuggets</h1>
                        </Link>
                        <Link to={'/popular'} className="LogIn">
                            <p className="buttonText">LOG IN</p>
                        </Link>
                        <Link to={'/bestseller'} className="SignUp">
                            <p className="buttonText">SIGN UP</p>
                        </Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Users