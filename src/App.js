/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';
import theme from './theme';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Login } from './components/views/Login/Login';
import { Post } from './components/views/Post/Post';
import { PostEdit } from './components/views/PostEdit/PostEdit';
import { PostAdd } from './components/views/PostAdd/PostAdd';
import { MyAds } from './components/views/MyAds/MyAds';
import { NotFound } from './components/views/NotFound/NotFound';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route exact path={`${process.env.PUBLIC_URL}/post/add`} component={PostAdd} />
              <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/post/:id`} component={Post} />
              <Route exact path={`${process.env.PUBLIC_URL}/post/:id/edit`} component={PostEdit} />
              <Route exact path={`${process.env.PUBLIC_URL}/posts`} component={MyAds} />
              <Route exact path={`${process.env.PUBLIC_URL}*`} component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
