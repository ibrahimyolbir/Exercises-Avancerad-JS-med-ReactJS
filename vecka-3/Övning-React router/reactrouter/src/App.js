import React, { Component } from 'react';
import { BrowserRouter as Router, Link,  Route } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Page1 from './page1';
import Page2 from './page2';
import Home from './home';
import './App.css';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/page1"> Page1 </Link>
        </li>
        <li>
          <Link to="/page2"> Page 2 </Link>
        </li>
      </ul>
    
    <Route exact path="/" component={Home} />
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
    </div>  
  </Router>
);


export default App;
