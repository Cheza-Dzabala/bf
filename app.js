import React, { Component } from 'react';
import ReactDom from 'react-dom';
import MainPage from './app/views/MainPage';
import SignIn from './app/views/signIn';
import SignUp from './app/views/SignUp';
import PageNotFound from './app/views/404';
import './app/styles/styles.scss';
import { Provider } from 'react-redux';
import store from './reduxStore';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'




const Application = () =>
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={() => {
                const token = window.localStorage.getItem('token');
                if (token === null) {
                    return <Redirect to="/signin" />
                }
                return <Redirect to="/dashboard" />
            }} />
            <Route exact path="/dashboard" component={MainPage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </Provider>

ReactDom.render(<Router><Application /></Router>, document.getElementById('app'));

