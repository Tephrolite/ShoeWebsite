import React from 'react';
import './Page.css';
import './signup.css';
import axios from 'axios';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        
        let userInput = "";

        this.state = {
            userInput: userInput
        }
    }

    takeUserInput = () => {
        let firstName = document.getElementById("firstName").value
        let lastName = document.getElementById("lastName").value
        let emailAddress = document.getElementById("emailAddress").value
        let userName = document.getElementById("userName").value
        let userPassword = document.getElementById("userPassword").value

        let input = "";
    
        if (firstName.length < 3) {
            alert("First Name must be at least 3 characters");
        }
        else {input = firstName + " " + lastName + " " + emailAddress + " " + userName + " " + userPassword;
            console.log(input);
            document.getElementById("firstName").value = ""
            document.getElementById("lastName").value = ""
            document.getElementById("emailAddress").value = ""
            document.getElementById("userName").value = ""
            document.getElementById("userPassword").value = ""
        }
    }


    render() {
        return (
            <div className="container">
                <div className="Page">
                    <div className="signUpPageContent">
                        <div className="signUpHeaderTitle">Sign Up</div>
                        <div className="signUpContainer">
                            <input type="text" id="firstName" className="signUpTextboxes" placeholder="First Name" maxLength="20"/>
                            <input type="text" id="lastName" className="signUpTextboxes" placeholder="Last Name" maxLength="25"/>
                            <input type="text" id="emailAddress" className="signUpTextboxes" placeholder="Email Address" maxLength="50"/>
                            <input type="text" id="userName" className="signUpTextboxes" placeholder="Username" maxLength="25"/>
                            <input type="text" id="userPassword" className="signUpTextboxes" placeholder="Password" maxLength="50"/>
                            <input onClick={() => {this.takeUserInput(); }} type="submit" id="submitButton" className="signUpSubmit" value="Submit"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;