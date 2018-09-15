import React from 'react';
import { Route } from 'react-router-dom';

import Template from '../containers/Template';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

export const routes = [
    {
        path: '/',
        component: Template,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/profile',
                component: Profile
            }
        ]
    }
];

const Routes = route => (
    <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

export default Routes;