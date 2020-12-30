import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import ExchangeMaster2 from './ExchangeMaster2';
import './index.scss';

ReactDOM.render(
  <Router>
    <ExchangeMaster2 />
  </Router>,
  document.getElementById('root')
);
