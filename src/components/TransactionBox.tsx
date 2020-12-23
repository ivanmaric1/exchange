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
  method: string;
}

const TransactionBox: React.FC<Props> = ({ changeTotal, currency, method }) => {
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
          onClick={() => setCurrencyForExchange('eur')}
        >
          <img src={eu} alt="Euro" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('chf')}
        >
          <img src={switzerland} alt="Switzerland" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('gpb')}
        >
          <img src={uk} alt="UnitedKingdom" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('usd')}
        >
          <img src={usd} alt="America" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('aud')}
        >
          <img src={australia} alt="Australia" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('cad')}
        >
          <img src={canada} alt="Canada" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('nok')}
        >
          <img src={norway} alt="Norway" />
        </button>
      </div>
      <div>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('sek')}
        >
          <img src={sweden} alt="Sweden" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('huf')}
        >
          <img src={hungarian} alt="Hungarian" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('jpy')}
        >
          <img src={japan} alt="Japan" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('dkk')}
        >
          <img src={danish} alt="Danish" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('czk')}
        >
          <img src={czech} alt="Czech" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('bam')}
        >
          <img src={bosnia} alt="Bosnia" />
        </button>
        <button
          className="TransactionBox-btn"
          onClick={() => setCurrencyForExchange('plm')}
        >
          <img src={poland} alt="Poland" />
        </button>
      </div>
      <div className="TransactionBox-output">
        <button onClick={() => exchange()}>{method}</button>
        <p>To pay off: {amountForPay} kn</p>
      </div>
    </div>
  );
};

export default TransactionBox;
