import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import './Menu.scss';

const Menu: React.FC = () => {
  return (
    <div className="Menu">
      <NavLink to="/">
        <img src={logo} alt="" className="Menu-logo" />
      </NavLink>
      <ul>
        <li>
          <NavLink to="buy" activeClassName="active">
            Buy
          </NavLink>
        </li>
        <li>
          <NavLink to="sell" activeClassName="active">
            Sell
          </NavLink>
        </li>
        <li>
          <NavLink to="transactions" activeClassName="active">
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink to="options" activeClassName="active">
            Options
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
