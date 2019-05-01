import React from 'react';
import { Route } from 'react-router-dom';

import GlobalStyle from './Global';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <GlobalStyle />
    </div>
  );
}

export default App;
