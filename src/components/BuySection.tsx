import React from 'react';

import australia from '../img/Currencies/Australia.png';
import canada from '../img/Currencies/Canada.png';
import czech from '../img/Currencies/Czech.png';
import danish from '../img/Currencies/Danish.png';
import hungarian from '../img/Currencies/Hungarian.png';
import japan from '../img/Currencies/Japan.png';
import norway from '../img/Currencies/Norway.png';
import sweden from '../img/Currencies/Sweden.png';
import switzerland from '../img/Currencies/Switzerland.png';
import uk from '../img/Currencies/Uk.png';
import usd from '../img/Currencies/Usd.png';
import bosnia from '../img/Currencies/Bosnia.png';
import eu from '../img/Currencies/Eu.png';
import poland from '../img/Currencies/Poland.png';
import './BuySection.scss';

const BuySection = () => {
  return (
    <div className="BuySection">
      <div className="BuySection-currencyList">
        <h2>Select currency</h2>
        <div>
          <img src={eu} alt="AustralianDolar" />
          <img src={switzerland} alt="AustralianDolar" />
          <img src={uk} alt="AustralianDolar" />
          <img src={usd} alt="AustralianDolar" />
          <img src={australia} alt="AustralianDolar" />
          <img src={canada} alt="CanadianDolar" />
          <img src={norway} alt="AustralianDolar" />
        </div>
        <div>
          <img src={sweden} alt="AustralianDolar" />
          <img src={hungarian} alt="AustralianDolar" />
          <img src={japan} alt="AustralianDolar" />
          <img src={danish} alt="AustralianDolar" />
          <img src={czech} alt="AustralianDolar" />
          <img src={bosnia} alt="AustralianDolar" />
          <img src={poland} alt="AustralianDolar" />
        </div>
      </div>
      <div className="BuySection-amount">
        <h2>Set Amount</h2>
        <input type="text" />
        <button>Buy</button>
      </div>
      <div className="BuySection-output">
        <p>Ringe ringe raja</p>
      </div>
    </div>
  );
};

export default BuySection;
