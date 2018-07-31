import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../store';

const storeStatus = store.getState();
console.log('storeStatus', storeStatus);

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        (localStorage.getItem('token') && localStorage.getItem('token') === "8d5367ad-82ae-4c0f-bb11-adf0b347a013a") ? <Component {...props} /> :
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
);
