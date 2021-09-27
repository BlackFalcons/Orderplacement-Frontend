import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from '../node_modules/react-router-dom'; // For some reason it wont let me import it regulary.
import App from './App';
import Login from "./Login"
import Orders from "./Orders"
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"

// https://www.markuptag.com/simple-login-form-design-in-bootstrap-5/
ReactDOM.render(
    <Router>
        <React.StrictMode>
            <Route exact path="/">
                <App/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/orders">
                <Orders />
            </Route>
        </React.StrictMode>,
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
