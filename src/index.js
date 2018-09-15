import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

import Routes, { routes } from './routes';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {routes.map((route, i) => <Routes key={i} {...route} />)}
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
