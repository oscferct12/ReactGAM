import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findServer from '../../redux/actions/findServerInstances';

class ServerInstaces extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    handleClick(e){
        console.log(e.target.name);
      }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            servers
        } = this.props;

        return (
            <Page
            servers={servers}
            />
        );
    }
}

const mapStateToProps = state => ({
    servers: state.servers
});

const mapDispatchToProps = {
    findServer
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ServerInstaces)
);
