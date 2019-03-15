import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import {
    NavLink,
    HashRouter
} from "react-router-dom";

import './style.css';

class NavMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
            value: ''
        };
    }

    render() {
        const {
            value
        } = this.props;

        return (
            <HashRouter>
                <div>
                    <Tabs onChange={this.handleChange} variant="scrollable" scrollButtons="off">
                        <Tab label="Home" icon={<HomeIcon />}/>
                    </Tabs>
                </div>
            </HashRouter>
        );
    }
}

export default NavMenu;
