import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Users } from './components/Users';
import { Notes } from './components/Notes';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/notes" component={Notes} />
      </Switch>
      <App />
    </React.StrictMode>
  </Router>
  , document.getElementById('root'));

