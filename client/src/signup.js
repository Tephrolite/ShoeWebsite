import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import './signup.css';

class SignUp extends React.Component {

    header = () => {
        return (
            <div className="Header">
                <Link to={'/'} className="Back">
                    <p className="buttonText">BACK</p>
                </Link>
                <Link to={'/'} className="websiteTitleContainer">
                    <h1 className="websiteTitleText">Spoons: The Most Inferior Eating Utensil Known To Man</h1>
                </Link>
                <Link to={'/login'} className="signUpLogIn">
                    <p className="buttonText">LOG IN</p>
                </Link>
            </div>
        )
    }

    render() {

        return (
            <div className="container">
                <div className="Page">
                    {this.header()}
                    <div className="signUpPageContent">
                        <div className="signUpHeaderTitle">Sign Up</div>
                        <div className="signUpContainer">
                            <input type="text" className="signUpTextboxes" placeholder="First Name"/>
                            <input type="text" className="signUpTextboxes" placeholder="Last Name"/>
                            <input type="text" className="signUpTextboxes" placeholder="Email Address"/>
                            <input type="text" className="signUpTextboxes" placeholder="Username"/>
                            <input type="text" className="signUpTextboxes" placeholder="Password"/>
                            <input type="submit" className="signUpSubmit" value="Submit"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;