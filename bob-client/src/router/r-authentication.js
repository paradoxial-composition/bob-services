import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../components/Login';

import GuessRoute from './GuessRoute'

import LoginForm from '../components/Login/LoginForm';
import RegisterForm from '../components/Login/RegisterForm';

export default ({ match }) => {
    return (
        <Login>
            <Route exact path={`${match.url}`} component={LoginForm} />
            <Route exact path={`${match.url}/register`} component={RegisterForm} />
        </Login>
    );    
}