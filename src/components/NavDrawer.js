import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

class NavDrawer extends Component {
    state = {
        open: true
    };

    toggle = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };

    render() {
        return (
            <div>
                <Button
                    variant='fab'
                    color='primary'
                    onClick={this.toggle}
                >
                    <Menu />
                </Button>
                <Drawer open={this.state.open}>
                    <Divider />
                    <Link to='/'>
                        <MenuItem onClick={this.toggle}>Play</MenuItem>
                    </Link>
                    <Link to='/profile'>
                        <MenuItem onClick={this.toggle}>Profile</MenuItem>
                    </Link>
                </Drawer>
            </div>
        );
    }
}

export default NavDrawer;