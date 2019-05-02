import React from 'react';
import { Route } from 'react-router-dom';

import GlobalStyle from './Global';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Header from './components/Header/Header';
import SinglePost from './components/Pages/SinglePost';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/post/:id" component={SinglePost} />
      <GlobalStyle />
    </div>
  );
}

export default App;
