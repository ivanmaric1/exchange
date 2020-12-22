import React, { useState, useRef } from 'react';
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
import './TransactionBox.scss';

interface Props {
  changeTotal: (chosenCurrency: string, value: string, result: string) => void;
  currency: any;
}

const TransactionBox: React.FC<Props> = ({ changeTotal, currency }) => {
  const [currencyForExchange, setCurrencyForExchange] = useState('');
  const [amountForPay, setAmountForPay] = useState('0');
  const amount: any = useRef();

  const exchange = () => {
    const chosenCurrency = currency[currencyForExchange].replace(/,/g, '.');
    const value = amount.current.value;
    const result = (Number(chosenCurrency) * Number(value)).toFixed(2);
    setAmountForPay(result);
    changeTotal(currencyForExchange, value, result);
    return result;
  };

  return (
    <div className="TransactionBox">
      <div className="TransactionBox-amount">
        <h2>Set Amount</h2>
        <input type="text" ref={amount} />
      </div>
      <h2>Select currency</h2>
      <div>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('eurBuy')}
        >
          <img src={eu} alt="Euro" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('chfBuy')}
        >
          <img src={switzerland} alt="Switzerland" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('gpbBuy')}
        >
          <img src={uk} alt="UnitedKingdom" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('usdBuy')}
        >
          <img src={usd} alt="America" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('audBuy')}
        >
          <img src={australia} alt="Australia" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('cadBuy')}
        >
          <img src={canada} alt="Canada" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('nokBuy')}
        >
          <img src={norway} alt="Norway" />
        </button>
      </div>
      <div>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('sekBuy')}
        >
          <img src={sweden} alt="Sweden" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('hufBuy')}
        >
          <img src={hungarian} alt="Hungarian" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('jpyBuy')}
        >
          <img src={japan} alt="Japan" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('dkkBuy')}
        >
          <img src={danish} alt="Danish" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('czkBuy')}
        >
          <img src={czech} alt="Czech" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('bamBuy')}
        >
          <img src={bosnia} alt="Bosnia" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('plmBuy')}
        >
          <img src={poland} alt="Poland" />
        </button>
      </div>
      <div className="TransactionBox-output">
        <button onClick={() => exchange()}>Buy</button>
        <p>To pay off: {amountForPay} kn</p>
      </div>
    </div>
  );
};

export default TransactionBox;
