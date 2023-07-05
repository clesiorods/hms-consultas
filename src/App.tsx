import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { Router } from './Router';
import 'devextreme/dist/css/dx.light.css';

function App() {
  return (
    <BrowserRouter basename='/'>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
