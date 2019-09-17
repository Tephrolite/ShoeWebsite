import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import './login.css';

class LogIn extends React.Component {

    header = () => {
        return (
            <div className="Header">
                <Link to={'/'} className="Back">
                    <p className="buttonText">BACK</p>
                </Link>
                <Link to={'/'} className="websiteTitleContainer">
                    <h1 className="websiteTitleText">Spoons: The Most Inferior Eating Utensil Known To Man</h1>
                </Link>
                <Link to={'/signup'} className="logInSignUp">
                    <p className="buttonText">SIGN UP</p>
                </Link>
            </div>
        )
     }

    render() {

        return (
            <div className="container">
                <div className="Page">
                    {this.header()}
                    <div className="logInPageContent">
                        <div className="logInHeaderTitle">Log In</div>
                        <div className="logInContainer">
                            <input type="text" className="logInTextboxes" placeholder="Email Address"/>
                            <input type="text" className="logInTextboxes" placeholder="Password"/>
                            <input type="submit" className="logInSubmit" value="Submit"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogIn;

