import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import GlobalStyle from './Global';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Header from './components/Header/Header';
import SinglePost from './components/Pages/SinglePost';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Header />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/post/:id" component={SinglePost} />
      <GlobalStyle />
    </div>
  );
}

export default App;
