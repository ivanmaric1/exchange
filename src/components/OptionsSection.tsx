import React, { useEffect, useState, useRef } from 'react';
import fire from './fire';
import './OptionsSection.scss';

const Options = () => {
  const [dataBaseData, setDataBaseData] = useState('');
  const [dataBaseKey, setDataBaseKey] = useState('');
  const totalRef = fire.database().ref('/total');
  const historyRef = fire.database().ref('/history');
  const amount: any = useRef();

  useEffect(() => {
    const gotData = (data: any) => {
      let bank = data.val();
      setDataBaseKey(Object.keys(bank)[0]);
      setDataBaseData(bank[Object.keys(bank)[0]]);
    };

    const errData = (err: any) => {
      console.log(err);
    };
    const database = fire.database();
    totalRef.on('value', gotData, errData);
  }, []);

  const deleteTransactions = () => {
    historyRef.set({
      empty: {
        method: 'NO HISTORY',
        currency: 'NO HISTORY',
        amount: 'NO HISTORY',
        payed: 'NO HISTORY',
        date: 'NO HISTORY',
        time: 'NO HISTORY',
      },
    });
  };

  const addFounds = () => {
    const value = amount.current.value;
    const dataFromServer: any = dataBaseData;
    const hrkFromServer = dataFromServer['HRK'];
    const updatedHrk = Number(value) + Number(hrkFromServer);
    const bankRef = totalRef.child(dataBaseKey);
    bankRef.update({
      HRK: updatedHrk.toFixed(2),
    });
    amount.current.value = '';
  };

  const resetAll = () => {
    const dataFromServer: any = dataBaseData;
    const bankRef = totalRef.child(dataBaseKey);
    bankRef.set({
      HRK: 100000,
      AUD: 0,
      CAD: 0,
      CZK: 0,
      DKK: 0,
      HUF: 0,
      JPY: 0,
      NOK: 0,
      SEK: 0,
      CHF: 0,
      GPB: 0,
      USD: 0,
      BAM: 0,
      EUR: 0,
      PLN: 0,
    });
  };

  const resetForeign = () => {
    const dataFromServer: any = dataBaseData;
    const bankRef = totalRef.child(dataBaseKey);
    bankRef.update({
      AUD: 0,
      CAD: 0,
      CZK: 0,
      DKK: 0,
      HUF: 0,
      JPY: 0,
      NOK: 0,
      SEK: 0,
      CHF: 0,
      GPB: 0,
      USD: 0,
      BAM: 0,
      EUR: 0,
      PLN: 0,
    });
  };

  return (
    <div className="OptionsSection">
      <div className="OptionsSection-option">
        <h3>Transactions</h3>
        <div className="OptionsSection-option-box">
          <p>Delete all transactions</p>
          <button
            className="OptionsSection-btn"
            onClick={() => deleteTransactions()}
          >
            Obriši
          </button>
        </div>
      </div>
      <div className="OptionsSection-option">
        <h3>Deposit</h3>
        <div className="OptionsSection-option-box">
          <p>Add funds to deposit</p>
          <div>
            <input type="text" placeholder="Iznos" ref={amount} />
            <button className="OptionsSection-btn" onClick={() => addFounds()}>
              Add to deposit
            </button>
          </div>
        </div>
        <div className="OptionsSection-option-box">
          <p>Reset deposit to its original settings</p>
          <button
            className="OptionsSection-btn danger"
            onClick={() => resetAll()}
          >
            Reset all
          </button>
        </div>
      </div>
      <div className="OptionsSection-option">
        <h3>Foreign currency</h3>
        <div className="OptionsSection-option-box">
          <p>Change of foreign currency in the bank</p>
          <button className="OptionsSection-btn" onClick={() => resetForeign()}>
            Payoff foreign currency for the bank
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
