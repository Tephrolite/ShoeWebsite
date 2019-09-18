import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Popular from './popular';
import BestSeller from './bestseller';
import LogIn from './login';
import SignUp from './signup';
import * as serviceWorker from './serviceWorker';

class Routing extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={App} />
                <Route path="/popular" component={Popular} />
                <Route path="/bestseller" component={BestSeller} />
                <Route path="/login" component={LogIn} />
                <Route path="/signup" component={SignUp} />
            </Router>
        )
    }
}

ReactDOM.render(<Routing/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
