import React, { useState, useEffect } from 'react';
import CurrencyList from './CurrencyList';
import Total from './Total';
import TransactionBox from './TransactionBox';
import axios from 'axios';
import fire from './fire';
import './BuySellSection.scss';

const BuySection = () => {
  const totalRef = fire.database().ref('/total');
  const historyRef = fire.database().ref('/history');
  const defaultRef = fire.database().ref('/default');
  const [dataBaseKey, setDataBaseKey] = useState('');
  const [dataBaseData, setDataBaseData] = useState('');
  const [defaultData, setDefaultData] = useState('');
  const [defaultList, setDefaultList] = useState('');
  const [defaultCurrency, setDefaultCurrency] = useState({
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
  const [hasData, setHasData] = useState(true);
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
          aud: res.data[0]['Kupovni za devize'],
          cad: res.data[1]['Kupovni za devize'],
          czk: res.data[2]['Kupovni za devize'],
          dkk: res.data[3]['Kupovni za devize'],
          huf: res.data[4]['Kupovni za devize'],
          jpy: res.data[5]['Kupovni za devize'],
          nok: res.data[6]['Kupovni za devize'],
          sek: res.data[7]['Kupovni za devize'],
          chf: res.data[8]['Kupovni za devize'],
          gpb: res.data[9]['Kupovni za devize'],
          usd: res.data[10]['Kupovni za devize'],
          bam: res.data[11]['Kupovni za devize'],
          eur: res.data[12]['Kupovni za devize'],
          pln: res.data[13]['Kupovni za devize'],
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

    const gotHistory = (data: any) => {
      const keys = Object.keys(data.val());
      if (keys[0] === 'empty') {
        setHasData(false);
      }
    };

    const errHistory = (err: any) => {
      console.log(err);
    };
    const history = fire.database();
    historyRef.on('value', gotHistory, errHistory);

    const gotDefault = (data: any) => {
      const defaultValue = data.val();
      setDefaultList(data.val().default);
      setDefaultCurrency({
        aud: defaultValue.default[0]['Kupovni za devize'],
        cad: defaultValue.default[1]['Kupovni za devize'],
        czk: defaultValue.default[2]['Kupovni za devize'],
        dkk: defaultValue.default[3]['Kupovni za devize'],
        huf: defaultValue.default[4]['Kupovni za devize'],
        jpy: defaultValue.default[5]['Kupovni za devize'],
        nok: defaultValue.default[6]['Kupovni za devize'],
        sek: defaultValue.default[7]['Kupovni za devize'],
        chf: defaultValue.default[8]['Kupovni za devize'],
        gpb: defaultValue.default[9]['Kupovni za devize'],
        usd: defaultValue.default[10]['Kupovni za devize'],
        bam: defaultValue.default[11]['Kupovni za devize'],
        eur: defaultValue.default[12]['Kupovni za devize'],
        pln: defaultValue.default[13]['Kupovni za devize'],
      });
    };

    const errDefault = (err: any) => {
      console.log(err);
    };

    defaultRef.on('value', gotDefault, errDefault);
  }, []);

  const changeTotal = (
    chosenCurrency: string,
    value: string,
    result: string
  ) => {
    const currencyForUpdate = chosenCurrency.toUpperCase();
    const dataFromServer: any = dataBaseData;
    const oldValue: any = dataFromServer[currencyForUpdate];
    const updatedValue = Number(oldValue) + Number(value);
    const hrkFromServer = dataFromServer['HRK'];
    const updatedHrk = Number(hrkFromServer) - Number(result);
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

    if (!hasData) {
      historyRef.set({
        first: {
          method: 'buy',
          currency: currencyForUpdate,
          amount: value,
          payed: result,
          date: `${year}-${month}-${date}`,
          time: `${hours}:${minutes}`,
        },
      });
    } else {
      let newTransaction = historyRef.push();
      newTransaction.set({
        method: 'buy',
        currency: currencyForUpdate,
        amount: value,
        payed: result,
        date: `${year}-${month}-${date}`,
        time: `${hours}:${minutes}`,
      });
    }
  };

  return (
    <div className="BuySection">
      <div className="BuySection-transaction">
        <Total total={dataBaseData} />
        <TransactionBox
          changeTotal={changeTotal}
          currency={currency}
          defaultCurrency={defaultCurrency}
          method={'Buy'}
        />
      </div>
      <div className="BuySection-list">
        <CurrencyList currencyList={currencyList} defaultList={defaultList} />
      </div>
    </div>
  );
};

export default BuySection;
