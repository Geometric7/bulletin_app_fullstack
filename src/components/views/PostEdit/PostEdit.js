/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { getLoginState } from '../../../redux/loginRedux';
import { getCurrentUser } from '../../../redux/userRedux';
import { getAllPosts, fetchPostDetails } from '../../../redux/postsRedux';
import styles from './PostEdit.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { match, fetchPostDetails } = this.props;
    fetchPostDetails(match.params._id);
  }

  render() {
    const { post, isLogged, currentUser } = this.props;

    const { title, image, text, price, phone, author, summary } = post;
    const { isAdmin, email } = currentUser;

    const isPostAuthor = author === email ? true : false;

    if (isLogged && (isPostAuthor || isAdmin)) {
      return (
        <div>
          <main className={styles.layout}>
            <Paper className={styles.paper}>
              <Typography component="h1" variant="h4" align="center">
              Edit your advertisement
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
                    value={author}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="Title"
                    fullWidth
                    value={title}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="text"
                    name="text"
                    label="Description"
                    fullWidth
                    value={text}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone"
                    fullWidth
                    value={phone}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="price"
                    name="price"
                    label="Price"
                    fullWidth
                    value={price}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="image"
                    name="image"
                    label="Image link"
                    fullWidth
                    value={image}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="summary"
                    name="summary"
                    label="Summary"
                    fullWidth
                    value={summary}
                  />
                </Grid>
              </Grid>
              <div className={styles.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.button}
                >
                Edit
                </Button>
              </div>
            </Paper>
          </main>
        </div>
      );
    } else if (isLogged) {
      return <NotFound />;
    } else {
      return <Login />;
    }
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  post: PropTypes.array,
  match: PropTypes.object,
  currentUser: PropTypes.object,
  isLogged: PropTypes.bool,
  fetchPostDetails: PropTypes.func,
};

const mapStateToProps = state => ({
  post: getAllPosts(state),
  isLogged: getLoginState(state),
  currentUser: getCurrentUser(state),
  fetchPostDetails: PropTypes.func,
});

const mapDispatchToProps = dispatch => ({
  fetchPostDetails: (id) => dispatch(fetchPostDetails(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostEdit,
  Component as PostEditComponent,
};
