/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { Login } from '../Login/Login';
import { connect } from 'react-redux';
import { getLoginState } from '../../../redux/loginRedux';
import { postToAPI } from '../../../redux/postsRedux';
import styles from './PostAdd.module.scss';

class Component extends React.Component {
  state = {
    name: '',
    email: '',
    title: '',
    text: '',
    status: '',
    location: '',
    price: '',
    phone: '',
    image: '',
    summary: '',
    created: '',
    changed: '',
  }

  componentDidMount() {
    const { postToAPI } = this.props;
    postToAPI();
  }

  handleClick() {
    const currentDate = new Date();

    this.setState({created: currentDate.toISOString(), changed: currentDate.toISOString(), status: 'published'}, () => {
      this.setState({
        name: '',
        email: '',
        title: '',
        text: '',
        status: '',
        location: '',
        price: '',
        phone: '',
        image: '',
        summary: '',
        created: '',
        changed: '',
      });
    });
  }

  render() {
    const {className, isLogged} = this.props;
    if(isLogged) {
      return (
        <div className={clsx(className, styles.root)}>
          <main className={styles.layout}>
            <Paper className={styles.paper}>
              <Typography component="h1" variant="h4" align="center">
                Add new advertisement
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email address"
                    fullWidth
                    autoComplete="email"
                    onChange={(e) => this.setState({ author: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="Title"
                    fullWidth
                    onChange={(e) => this.setState({ title: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="text"
                    name="text"
                    label="Description"
                    fullWidth
                    onChange={(e) => this.setState({ text: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone"
                    fullWidth
                    onChange={(e) => this.setState({ phone: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="price"
                    name="price"
                    label="Price"
                    fullWidth
                    onChange={(e) => this.setState({ price: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="image"
                    name="image"
                    label="Image link"
                    fullWidth
                    onChange={(e) => this.setState({ image: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="summary"
                    name="summary"
                    label="Image title"
                    fullWidth
                    onChange={(e) => this.setState({ summary: e.target.value })}
                  />
                </Grid>
              </Grid>
              <div className={styles.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.button}
                  onClick={() => this.handleClick()}
                >
                  Add
                </Button>
              </div>
            </Paper>
          </main>
        </div>
      );
    } else {
      return <Login />;
    }
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  postToAPI: PropTypes.func,
};

const mapStateToProps = state => ({
  isLogged: getLoginState(state),
});

const mapDispatchToProps = dispatch => ({
  postToAPI: (post) => dispatch(postToAPI(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostAdd,
  Component as PostAddComponent,
};
