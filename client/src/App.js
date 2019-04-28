import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import GlobalStyle from './Global';
import Login from './components/Pages/Login';

function App() {
  return (
    <div className="App">
      <h1>Disney Parent =) </h1>
      <Route path="/login" component={Login} />
      <GlobalStyle />
    </div>
  );
}

export default App;
