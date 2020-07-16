import React from 'react';
import { Button, FormControl, TextField } from '@material-ui/core';

function Login(props) {
    return (
        <div>
           <FormControl>
           <TextField variant="outlined" label="Email"/>  
           <TextField variant="outlined" label="Password"/>  
           <Button onClick={props.logIn}>LogIn</Button>
            </FormControl> 
        </div>
    )
}

export default Login;
