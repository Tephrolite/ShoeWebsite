import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Popular from './Pages/Popular/popular';
import BestSeller from './Pages/Bestseller/bestseller';
import LogIn from './Pages/LogIn/login';
import SignUp from './Pages/SignUp/signup';
import * as serviceWorker from './serviceWorker';
import Header from "./Pages/Shared-Components/Header";

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
                <Route exact path="/" render={() => <Home />} />
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
