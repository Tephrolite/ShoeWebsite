import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Popular from './Pages/popular';
import BestSeller from './Pages/bestseller';
import LogIn from './Pages/login';
import SignUp from './Pages/signup';
import * as serviceWorker from './serviceWorker';
import Header from "./Components/Header";

class Routing extends Component {
    constructor(){
        super();
        this.state = {
            loggedIn: false
        }
    }

    handleLogIn = () => this.setState({loggedIn: true})

    render() {
        console.log(this.state.loggedIn)
        return (
            <Router>
                <Header isLoggedIn= {this.state.loggedIn}/>
                <Route exact path="/" render={() => <App />} />
                <Route path="/popular" render={() => <Popular />} />
                <Route path="/bestseller" render={() => <BestSeller />} />
                <Route path="/login" render={() => <LogIn handleLogIn={this.handleLogIn}/>} />
                <Route path="/signup" render={() => <SignUp />} />
            </Router>
        )
    }
}

ReactDOM.render(<Routing/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
