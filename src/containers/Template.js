import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Routes from '../routes';

class Template extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>TicTacTuring</h1>
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