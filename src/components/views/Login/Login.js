/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Checkbox, FormControlLabel, TextField, Typography, Link } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
//import clsx from 'clsx';

import styles from './Login.module.scss';

const Component = () => (
  <Grid>
    <Paper elevation={5} className={styles.paperStyle}>
      <Grid align='center' margin-top='20'>
        <Avatar className={styles.avatarStyle}>
          <LockOutlined/>
        </Avatar>
        <h2>Sign in</h2>
      </Grid>
      <TextField
        type="email"
        placeholder="Email"
        fullWidth
        name="username"
        variant="outlined"
        value=""
        onChange={(event) =>
          this.setState({
            [event.target.name]: event.target.value,
          })
        }
        required
        autoFocus
      />
      <TextField
        type="password"
        placeholder="Password"
        fullWidth
        name="password"
        variant="outlined"
        value=""
        onChange={(event) =>
          this.setState({
            [event.target.name]: event.target.value,
          })
        }
        required
      />
      <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Rember me"
      />
      <Button type='submit' color='primary' variant="contained" fullWidth>Sign in</Button>
      <Typography >
        <Link href="#" underline="none">
              Forgot password?
        </Link>
      </Typography>
      <Button type='submit' variant="outlined" fullWidth href="/auth/google">Login with Google</Button>
      <Typography > Do you have an account?
        <Link href="#" underline="none">
              Sign up
        </Link>
      </Typography>
    </Paper>

  </Grid>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};



export {
  Component as Login,
  Component as LoginComponent,
};
