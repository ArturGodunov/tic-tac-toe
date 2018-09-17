import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import NavDrawer from '../components/NavDrawer'

import Routes from '../routes';

class Template extends Component {
    render() {
        return (
            <div>
                <NavDrawer />
                <main>
                    <Switch>
                        {this.props.routes.map((route, i) => <Routes key={i} {...route} />)}
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Template;