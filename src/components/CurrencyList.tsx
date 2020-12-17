import React, { useState, useEffect } from 'react';
import Currency from './Currency';
import axios from 'axios';
import './CurrencyList.scss';

const CurrencyList = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.hnb.hr/tecajn/v1`)
      .then((res) => {
        setCurrencies(res.data);
      });
  }, []);

  return (
    <div className="CurrencyList">
      <h4>
        Tečajna lista{' '}
        {currencies === undefined ? currencies[0]['Datum primjene'] : null}
      </h4>

      <ul className="Currency">
        <li>Država</li>
        <li>Valuta</li>
        <li>Jedinica</li>
        <li>Kupovni tečaj</li>
        <li>Prodajni tečaj</li>
      </ul>

      {currencies.map((item: any) => (
        <Currency
          država={item.Država}
          valuta={item.Valuta}
          jedinica={item.Jedinica}
          prodajni={item['Prodajni za devize']}
          kupovni={item['Kupovni za devize']}
        />
      ))}
    </div>
  );
};

export default CurrencyList;
