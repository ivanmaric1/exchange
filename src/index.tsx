import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ExchangeMaster2 from './ExchangeMaster2';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <ExchangeMaster2 />
  </BrowserRouter>,
  document.getElementById('root')
);
