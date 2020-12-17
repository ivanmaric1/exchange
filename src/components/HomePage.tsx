import React, { useState } from 'react';
import CurrencyList from './CurrencyList';
import Menu from './Menu';
import HomeSection from './HomeSection';
import BuySection from './BuySection';
import SellSection from './SellSection';
import Statistics from './Statistics';
import Options from './Options';
import Total from './Total';
import Counter from './Counter';

import './HomePage.scss';

const HomePage = () => {
  const [page, setPage] = useState('home');

  const renderMainContent = () => {
    let elementForRender = [];

    if (page === 'home') {
      elementForRender.push(<HomeSection />);
    }
    if (page === 'buy') {
      elementForRender.push(<BuySection />);
    }
    if (page === 'sell') {
      elementForRender.push(<SellSection />);
    }
    if (page === 'statistics') {
      elementForRender.push(<Statistics />);
    }
    if (page === 'options') {
      elementForRender.push(<Options />);
    }

    return elementForRender;
  };

  return (
    <div className="HomePage">
      <div className="HomePage-container">
        <Menu page={page} setPage={setPage} />
        <div className="HomePage-content">
          <div className="HomePage-content-action">{renderMainContent()}</div>
          <div className="HomePage-content-total">
            <Total />
            <Counter />
          </div>
          <div className="HomePage-content-currency">
            <CurrencyList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
