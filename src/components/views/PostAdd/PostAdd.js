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
    authorName: '',
    authorEmail: '',
    title: '',
    description: '',
    status: '',
    location: '',
    price: '',
    phone: '',
    image: '',
    imageTitle: '',
    publicationDate: '',
    lastUpdate: '',
  }

  handleClick() {
    const { postToAPI } = this.props;
    const currentDate = new Date();

    this.setState({publicationDate: currentDate.toISOString(), lastUpdate: currentDate.toISOString(), status: 'published'}, () => {
      postToAPI(this.state);
      this.setState({
        authorName: '',
        authorEmail: '',
        title: '',
        description: '',
        status: '',
        location: '',
        price: '',
        phone: '',
        image: '',
        imageTitle: '',
        publicationDate: '',
        lastUpdate: '',
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
                    id="authorName"
                    name="authorName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    onChange={(e) => this.setState({ authorName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="authorEmail"
                    name="authorEmail"
                    label="Email address"
                    fullWidth
                    autoComplete="email"
                    onChange={(e) => this.setState({ authorEmail: e.target.value })}
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
                    id="description"
                    name="description"
                    label="Description"
                    fullWidth
                    onChange={(e) => this.setState({ description: e.target.value })}
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
                    id="imageTitle"
                    name="imageTitle"
                    label="Image title"
                    fullWidth
                    onChange={(e) => this.setState({ imageTitle: e.target.value })}
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
