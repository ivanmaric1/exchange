import React from 'react';
import logo from '../img/logo.png';
import './Menu.scss';

interface Props {
  page: string;
  setPage: (page: string) => void;
}

const Menu: React.FC<Props> = ({ page, setPage }) => {
  return (
    <div className="Menu">
      <img
        src={logo}
        alt=""
        className="Menu-logo"
        onClick={() => setPage('home')}
      />

      <ul>
        <li onClick={() => setPage('home')}>Home</li>
        <li onClick={() => setPage('buy')}>Buy</li>
        <li onClick={() => setPage('sell')}>Sell</li>
        <li onClick={() => setPage('statistics')}>Statistics</li>
        <li onClick={() => setPage('options')}>Options</li>
      </ul>
    </div>
  );
};

export default Menu;
