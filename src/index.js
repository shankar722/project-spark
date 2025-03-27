import React from 'react';
import ReactDOM from 'react-dom';
import GuardianEyeProvider from './redux/context.jsx';
import App from './App.jsx';

ReactDOM.render(
  <GuardianEyeProvider>
    <App />
  </GuardianEyeProvider>,
  document.getElementById('root')
);