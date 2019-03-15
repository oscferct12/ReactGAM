import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findRoles from '../../redux/actions/findRoles';

class ProjecRoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            roles,
        } = this.props;

        return (
            <Page
            roles={roles}
            />
        );
    }
}

const mapStateToProps = state => ({
    roles: state.roles,
});

const mapDispatchToProps = {
    findRoles,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ProjecRoles)
);