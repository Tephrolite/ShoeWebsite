import React from 'react';
import { Redirect } from 'react-router-dom';
import './signup.css';
import axios from 'axios';

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        let userInput = "";
        this.state = {
            firstName: "",
            lastName: "",
            emailAddress: "",
            userName: "",
            userPassword: "",
            confirmUserPassword: "",

            userInput: userInput,

            signUpValid: false
        }
    }

    clearSignUpFields = () => {
        console.log("Stuff");
        document.getElementById("firstName").value = " ";
        document.getElementById("lastName").value = " ";
        document.getElementById("emailAddress").value = " ";
        document.getElementById("userName").value = " ";
        document.getElementById("userPassword").value = " ";
        document.getElementById("confirmUserPassword").value = " ";
    }

    updateFirstName = (e) => {
        const firstName = e.target.value;
        this.setState({ firstName })
    }

    updateLastName = (e) => {
        const lastName = e.target.value;
        this.setState({ lastName })
    }

    updateEmailAddress = (e) => {
        const emailAddress = e.target.value;
        this.setState({ emailAddress })
    }

    updateUserName = (e) => {
        const userName = e.target.value;
        this.setState({ userName })
    }

    updatePassword = (e) => {
        const userPassword = e.target.value;
        this.setState({ userPassword })
    }

    updateConfirmPassword = (e) => {
        const confirmUserPassword = e.target.value;
        this.setState({ confirmUserPassword })
    }

    clearFirstNamePlaceholder = () => {
        if (document.getElementById("firstName").placeholder === "First Name") {
            document.getElementById("firstName").placeholder = ""
        }
    }

    clearLastNamePlaceholder = () => {
        if (document.getElementById("lastName").placeholder === "Last Name") {
            document.getElementById("lastName").placeholder = ""
        }
    }

    clearEmailAddressPlaceholder = () => {
        if (document.getElementById("emailAddress").placeholder === "Email Address") {
            document.getElementById("emailAddress").placeholder = ""
        }
    }

    clearUsernamePlaceholder = () => {
        if (document.getElementById("userName").placeholder === "Username") {
            document.getElementById("userName").placeholder = ""
        }
    }

    clearUserPasswordPlaceholder = () => {
        if (document.getElementById("userPassword").placeholder === "Password") {
            document.getElementById("userPassword").placeholder = ""
        }
    }

    clearConfirmUserPasswordPlaceholder = () => {
        if (document.getElementById("confirmUserPassword").placeholder === "Confirm Password") {
            document.getElementById("confirmUserPassword").placeholder = ""
        }
    }

    replaceFirstNamePlaceholder = () => {
        if (document.getElementById("firstName").placeholder === "" && document.getElementById("firstName").value === "") {
            document.getElementById("firstName").placeholder = "First Name"
        }
    }

    replaceLastNamePlaceholder = () => {
        if (document.getElementById("lastName").placeholder === "" && document.getElementById("lastName").value === "") {
            document.getElementById("lastName").placeholder = "Last Name"
        }
    }

    replaceEmailAddressPlaceholder = () => {
        if (document.getElementById("emailAddress").placeholder === "" && document.getElementById("emailAddress").value === "") {
            document.getElementById("emailAddress").placeholder = "Email Address"
        }
    }

    replaceUsernamePlaceholder = () => {
        if (document.getElementById("userName").placeholder === "" && document.getElementById("userName").value === "") {
            document.getElementById("userName").placeholder = "Username"
        }
    }

    replaceUserPasswordPlaceholder = () => {
        if (document.getElementById("userPassword").placeholder === "" && document.getElementById("userPassword").value === "") {
            document.getElementById("userPassword").placeholder = "Password"
        }
    }

    replaceConfirmUserPasswordPlaceholder = () => {
        if (document.getElementById("confirmUserPassword").placeholder === "" && document.getElementById("confirmUserPassword").value === "") {
            document.getElementById("confirmUserPassword").placeholder = "Confirm Password"
        }
    }



    
    takeUserInput = () => {
        
        if (document.getElementById("firstName").value.length < 3) {
            alert("First Name must be at least 3 characters");
            console.log("Stopped @1");
        }
        else if (document.getElementById("confirmUserPassword").value !== document.getElementById("userPassword").value) {
            alert("Passwords must match");
            document.getElementById("confirmUserPassword").value = '';
            document.getElementById("userPassword").value = "";
            document.getElementById("userPassword").focus();
            console.log("Stopped @2");
        }
        else {
            this.setState({ firstName: document.getElementById("firstName").value });
            this.setState({ lastName: document.getElementById("lastName").value });
            this.setState({ emailAddress: document.getElementById("emailAddress").value });
            this.setState({ userName: document.getElementById("userName").value });
            this.setState({ userPassword: document.getElementById("userPassword").value });
            this.setState({ confirmUserPassword: document.getElementById("confirmUserPassword").value });
            
            console.log("Stopped @3")
            
            this.pushUser();
            
            this.setState({ signUpValid: true });
        }
        console.log("Got To The End MotherF####R");
        
        /*let input = "";
        
        
        else {input = firstName + " " + lastName + " " + emailAddress + " " + userName + " " + userPassword;
        console.log(input);
        
    } */
}

pushUser() {
    axios.post('http://localhost:3001/api/test',
        {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailAddress: this.state.emailAddress,
            userName: this.state.userName,
            userPassword: this.state.userPassword
        })
        .then((response) => {
            console.log(response.data);
        });
}

renderRedirect = () => {
    if (this.state.signUpValid === true) {
        return <Redirect to='/login' />
        }
    }

    render() {
            return (
                <div className="container">
                {this.renderRedirect()}
                    <div className="Page">
                        <div className="signUpPageContent">
                            <div className="signUpHeaderTitle">Sign Up</div>
                            <div className="signUpContainer">
                                <input type="text" id="firstName" autoComplete="off" value={this.state.firstName} onFocus={() => { this.clearFirstNamePlaceholder() }} onBlur={() => { this.replaceFirstNamePlaceholder() }} onChange={(e) => this.updateFirstName(e)} className="signUpTextboxes" placeholder="First Name" maxLength="20" />

                                <input type="text" id="lastName" autoComplete="off" value={this.state.lastName} onFocus={() => { this.clearLastNamePlaceholder() }} onBlur={() => { this.replaceLastNamePlaceholder() }} onChange={(e) => this.updateLastName(e)} className="signUpTextboxes" placeholder="Last Name" maxLength="25" />

                                <input type="text" id="emailAddress" autoComplete="off" value={this.state.emailAddress} onFocus={() => { this.clearEmailAddressPlaceholder() }} onBlur={() => { this.replaceEmailAddressPlaceholder() }} onChange={(e) => this.updateEmailAddress(e)} className="signUpTextboxes" placeholder="Email Address" maxLength="50" />

                                <input type="text" id="userName" autoComplete="off"value={this.state.userName} onFocus={() => { this.clearUsernamePlaceholder() }} onBlur={() => { this.replaceUsernamePlaceholder() }} onChange={(e) => this.updateUserName(e)} className="signUpTextboxes" placeholder="Username" maxLength="25" />

                                <input type="password" id="userPassword" value={this.state.userPassword} onFocus={() => { this.clearUserPasswordPlaceholder() }} onBlur={() => { this.replaceUserPasswordPlaceholder() }} onChange={(e) => this.updatePassword(e)} className="signUpTextboxes" placeholder="Password" maxLength="50" />

                                <input type="password" id="confirmUserPassword" value={this.state.confirmUserPassword} onFocus={() => { this.clearConfirmUserPasswordPlaceholder() }} onBlur={() => { this.replaceConfirmUserPasswordPlaceholder() }} onChange={(e) => this.updateConfirmPassword(e)} className="signUpTextboxes" placeholder="Confirm Password" maxLength="50" />

                                <input type="submit" onClick={() => { this.takeUserInput(); }} id="submitButton" className="signUpSubmit" value="Sign Up" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        ;
    }
}

export default SignUp;