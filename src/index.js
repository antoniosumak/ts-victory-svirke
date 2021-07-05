import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Switch>
          <App />
        </Switch>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
