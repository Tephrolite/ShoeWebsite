import React from 'react';
import './Page.css';
import './login.css';

class LogIn extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="Page">
                    <div className="logInPageContent">
                        <div className="logInHeaderTitle">Log In</div>
                        <div className="logInContainer">
                            <input type="text" className="logInTextboxes" placeholder="Email Address"/>
                            <input type="text" className="logInTextboxes" placeholder="Password"/>
                            <input type="submit" className="logInSubmit" value="Submit" onClick={() => { this.props.handleLogIn(); }}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogIn;

