import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import './style.css';

function Page(props) {
    const {
        roles
    } = props;

    return (
<form className="container" noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          className="textField"
          margin="normal"
        />

        <TextField
          id="standard-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className="textField"
          margin="normal"
        />

        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          className="textField"
          margin="normal"
        />

        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          className="textField"
          margin="normal"
        />

        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          className="textField"
          margin="normal"
        />

        <TextField
          id="standard-password-input"
          label="Password"
          className="textField"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          className="textField"
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          className="textField"
          margin="normal"
        />

        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className="textField"
          margin="normal"
        />

        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          className="textField"
          helperText="Some important text"
          margin="normal"
        />

        <TextField
          id="standard-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className="textField"
          margin="normal"
        />

        <TextField
          id="standard-textarea"
          label="With placeholder multiline"
          placeholder="Placeholder"
          multiline
          className="textField"
          margin="normal"
        />

        <TextField
          id="standard-number"
          label="Number"
          type="number"
          className="textField"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />

        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className="textField"
          margin="normal"
        />

        <TextField
          id="standard-select-currency"
          select
          label="Select"
          className="textField"
          helperText="Please select your currency"
          margin="normal"
        >
          {roles.map(rol => (
            <MenuItem key={rol.id} value={rol.value}>
              {rol.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          className="textField"
          helperText="Please select your currency"
          margin="normal"
        >
          {roles.map(rol => (
            <MenuItem key={rol.id} value={rol.value}>
              {rol.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="standard-bare"
          className="textField"
          defaultValue="Bare"
          margin="normal"
        />
      </form>
    );
}

export default Page;
