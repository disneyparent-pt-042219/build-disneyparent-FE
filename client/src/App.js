import React from 'react';
import { Route } from 'react-router-dom';

import GlobalStyle from './Global';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Header from './components/Header/Header';
import SinglePost from './components/Pages/SinglePost';
import PostForm from './components/Pages/NewPost';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/post/:id" component={SinglePost} />
      <PrivateRoute exact path="/newpost" component={PostForm} />
      <GlobalStyle />
    </div>
  );
}

export default App;
