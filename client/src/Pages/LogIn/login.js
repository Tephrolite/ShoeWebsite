import React from 'react';
import { Redirect } from 'react-router-dom';
import './login.css';

class LogIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        }
    }

    takeUserInput = () => {
        this.setState({ loggedIn: true });
    }

    renderRedirect = () => {
        if (this.state.loggedIn === true) {
            return <Redirect to='/' />
        }
    }

    render() {
        return (
            <div className="container">
                {this.renderRedirect()}
                <div className="Page">
                    <div className="logInPageContent">
                        <div className="logInHeaderTitle">Log In</div>
                        <div className="logInContainer">
                            <input type="text" className="logInTextboxes" placeholder="Email Address" />
                            <input type="text" className="logInTextboxes" placeholder="Password" />
                            <input type="submit" onClick={() => { this.takeUserInput(); this.props.handleLogIn();}} className="logInSubmit" value="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogIn;

