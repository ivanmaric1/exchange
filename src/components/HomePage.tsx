import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import HomeSection from './HomeSection';
import BuySection from './BuySection';
import SellSection from './SellSection';
import TransactionsSection from './TransactionSection';
import OptionsSection from './OptionsSection';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePage-container">
        <Menu />
        <div className="HomePage-container-content">
          <Switch>
            <Route exact path="/" component={HomeSection} />
            <Route path="/buy" component={BuySection} />
            <Route path="/sell" component={SellSection} />
            <Route path="/transactions" component={TransactionsSection} />
            <Route path="/options" component={OptionsSection} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
