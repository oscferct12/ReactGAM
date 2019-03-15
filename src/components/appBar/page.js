import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../autocomplete';
import './style.css';
import logo from './logo.png';
import NavMenu from  '../navMenu'
function Page(props) {
    const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
    } = props;

    return (
        <AppBar position="fixed">
            <Toolbar className="appbar">
            <img src={logo} alt="Logo"/>
                <Typography variant="h5" color="inherit">
                Access Management
                </Typography>
               
                <Autocomplete
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />
                <NavMenu/>
                <AccountCircle />
            </Toolbar>
        </AppBar>
    );
}

export default Page;
