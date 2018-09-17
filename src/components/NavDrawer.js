import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { NavToggleButton } from '../styled/NavDrawer';

class NavDrawer extends Component {
    state = {
        open: true,
        width: 250
    };

    toggle = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };

    render() {
        return (
            <div>
                <NavToggleButton
                    toggle={this.toggle}
                    open={this.state.open}
                    width={this.state.width}
                />
                <Drawer open={this.state.open}>
                    <div style={{ width: this.state.width }}>
                        <Divider />
                        <Link to='/'>
                            <MenuItem onClick={this.toggle}>Play</MenuItem>
                        </Link>
                        <Link to='/profile'>
                            <MenuItem onClick={this.toggle}>Profile</MenuItem>
                        </Link>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default NavDrawer;