import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import findRoles from '../../redux/actions/findRoles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class ListRoles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };
    }

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
      };

    render() {
        const {
        roles,
        } = this.props;

        return (
            <div >
      <List
        component="nav"
        subheader={<ListSubheader component="div">Project Roles</ListSubheader>}
      >
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Roles" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          {roles.map(rol => (
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={rol.value} />
              </ListItem>
          ))}
          </List>
        </Collapse>
      </List>
          </div>
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
    connect(mapStateToProps, mapDispatchToProps)(ListRoles)
);

