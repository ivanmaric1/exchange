import React from 'react';
import logo from '../img/logo.png';
import './Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <a href="">
        <img src={logo} alt="" className="Menu-logo" />
      </a>
      <ul>
        <li>Home</li>
        <li>Buy</li>
        <li>Sell</li>
        <li>Statistics</li>
        <li>Options</li>
      </ul>
    </div>
  );
};

export default Menu;
