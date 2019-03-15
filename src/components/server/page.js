import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './style.css';

function Page(props) {
  const {
    servers
  } = props;

  return (
    <Fragment>
      <CssBaseline />
      <List>
        {servers.map(item =>
          
          <ListItem alignItems="flex-start" className="listItem">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={item.image} />
          </ListItemAvatar>
          <ListItemText
            primary={item.title}
          />
        </ListItem>
          
          )}

      </List>
    </Fragment>
  );
}

export default Page;
