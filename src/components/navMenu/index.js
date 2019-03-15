import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import {
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

        this.goTo = this.goTo.bind(this);
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            value
        } = this.props;

        return (
            <HashRouter>
                <div>
                    <Tabs>
                        <Tab label="Home" icon={<HomeIcon />} onClick={() =>  this.goTo(`/dashboard`)}/>
                    </Tabs>
                </div>
            </HashRouter>
        );
    }
}


export default withRouter(NavMenu);
