import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';

import Routes from '../routes';

class Template extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>TicTacTuring</h1>
                    <Button color="primary" variant='contained'>test button</Button>
                </header>
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