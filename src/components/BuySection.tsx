import React, { useState, useEffect } from 'react';
import CurrencyList from './CurrencyList';
import Total from './Total';
import Counter from './Counter';
import TransactionBox from './TransactionBox';
import axios from 'axios';
import fire from './fire';
import './BuySection.scss';

const BuySection = () => {
  const totalRef = fire.database().ref('/total');
  const [dataBaseKey, setDataBaseKey] = useState('');
  const [dataBaseData, setDataBaseData] = useState('');
  const [currencyList, setCurrencyList] = useState('');
  const [currency, setCurrency] = useState({
    audBuy: '',
    cadBuy: '',
    czkBuy: '',
    dkkBuy: '',
    hufBuy: '',
    jpyBuy: '',
    nokBuy: '',
    sekBuy: '',
    chfBuy: '',
    gpbBuy: '',
    usdBuy: '',
    bamBuy: '',
    eurBuy: '',
    plnBuy: '',
  });

  useEffect(() => {
    axios
      .get(`https://thingproxy.freeboard.io/fetch/https://api.hnb.hr/tecajn/v1`)
      .then((res) => {
        setCurrencyList(res.data);
        setCurrency({
          audBuy: res.data[0]['Kupovni za devize'],
          cadBuy: res.data[1]['Kupovni za devize'],
          czkBuy: res.data[2]['Kupovni za devize'],
          dkkBuy: res.data[3]['Kupovni za devize'],
          hufBuy: res.data[4]['Kupovni za devize'],
          jpyBuy: res.data[5]['Kupovni za devize'],
          nokBuy: res.data[6]['Kupovni za devize'],
          sekBuy: res.data[7]['Kupovni za devize'],
          chfBuy: res.data[8]['Kupovni za devize'],
          gpbBuy: res.data[9]['Kupovni za devize'],
          usdBuy: res.data[10]['Kupovni za devize'],
          bamBuy: res.data[11]['Kupovni za devize'],
          eurBuy: res.data[12]['Kupovni za devize'],
          plnBuy: res.data[13]['Kupovni za devize'],
        });
      });

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

  const changeTotal = (
    chosenCurrency: string,
    value: string,
    result: string
  ) => {
    const currencyForUpdate = chosenCurrency.slice(0, 3).toUpperCase();
    const dataFromServer: any = dataBaseData;
    const oldValue: any = dataFromServer[currencyForUpdate];
    const updatedValue = Number(oldValue) + Number(value);
    const hrkFromServer = dataFromServer['HRK'];
    const updatedHrk = Number(hrkFromServer) - Number(result);

    const baseRef = fire.database().ref('total').child(dataBaseKey);
    baseRef.update({
      [currencyForUpdate]: updatedValue,
      HRK: updatedHrk.toFixed(2),
    });
  };

  return (
    <div className="BuySection">
      <div className="BuySection-transaction">
        <TransactionBox changeTotal={changeTotal} currency={currency} />
      </div>
      <div className="BuySection-total">
        <Total total={dataBaseData} />
        <Counter />
      </div>
      <div className="BuySection-list">
        <CurrencyList currencyList={currencyList} />
      </div>
    </div>
  );
};

export default BuySection;
