import React, { useState, useEffect } from 'react';
import CurrencyList from './CurrencyList';
import Total from './Total';
import Counter from './Counter';
import TransactionBox from './TransactionBox';
import axios from 'axios';
import fire from './fire';
import './BuySellSection.scss';

const SellSection = () => {
  const totalRef = fire.database().ref('/total');
  const [dataBaseKey, setDataBaseKey] = useState('');
  const [dataBaseData, setDataBaseData] = useState('');
  const [currencyList, setCurrencyList] = useState('');
  const [currency, setCurrency] = useState({
    aud: '',
    cad: '',
    czk: '',
    dkk: '',
    huf: '',
    jpy: '',
    nok: '',
    sek: '',
    chf: '',
    gpb: '',
    usd: '',
    bam: '',
    eur: '',
    pln: '',
  });

  useEffect(() => {
    axios
      .get(`https://thingproxy.freeboard.io/fetch/https://api.hnb.hr/tecajn/v1`)
      .then((res) => {
        setCurrencyList(res.data);
        setCurrency({
          aud: res.data[0]['Prodajni za devize'],
          cad: res.data[1]['Prodajni za devize'],
          czk: res.data[2]['Prodajni za devize'],
          dkk: res.data[3]['Prodajni za devize'],
          huf: res.data[4]['Prodajni za devize'],
          jpy: res.data[5]['Prodajni za devize'],
          nok: res.data[6]['Prodajni za devize'],
          sek: res.data[7]['Prodajni za devize'],
          chf: res.data[8]['Prodajni za devize'],
          gpb: res.data[9]['Prodajni za devize'],
          usd: res.data[10]['Prodajni za devize'],
          bam: res.data[11]['Prodajni za devize'],
          eur: res.data[12]['Prodajni za devize'],
          pln: res.data[13]['Prodajni za devize'],
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
    const currencyForUpdate = chosenCurrency.toUpperCase();
    const dataFromServer: any = dataBaseData;
    const oldValue: any = dataFromServer[currencyForUpdate];
    const updatedValue = Number(oldValue) - Number(value);
    const hrkFromServer = dataFromServer['HRK'];
    const updatedHrk = Number(hrkFromServer) + Number(result);
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();

    const baseRef = fire.database().ref('total').child(dataBaseKey);
    baseRef.update({
      [currencyForUpdate]: updatedValue,
      HRK: updatedHrk.toFixed(2),
    });

    const historyRef = fire.database().ref('history');
    let newTransaction = historyRef.push();
    newTransaction.set({
      method: 'sell',
      currency: currencyForUpdate,
      amount: value,
      payed: result,
      date: `${year}-${month}-${date}`,
      time: `${hours}:${minutes}`,
    });
  };

  return (
    <div className="SellSection">
      <div className="SellSection-transaction">
        <TransactionBox
          changeTotal={changeTotal}
          currency={currency}
          method={'Sell'}
        />
      </div>
      <div className="SellSection-total">
        <Total total={dataBaseData} />
        <Counter />
      </div>
      <div className="SellSection-list">
        <CurrencyList currencyList={currencyList} />
      </div>
    </div>
  );
};

export default SellSection;
