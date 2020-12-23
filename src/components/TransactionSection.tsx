import React, { useEffect, useState } from 'react';
import FilterTransactions from './FilterTransactions';
import fire from './fire';
import './TransactionSection.scss';

const Statistics = () => {
  const [history, setHistory] = useState();
  const historyRef = fire.database().ref('/history');

  useEffect(() => {
    const gotData = (data: any) => {
      setHistory(data.val());
    };

    const errData = (err: any) => {
      console.log(err);
    };
    const database = fire.database();
    historyRef.on('value', gotData, errData);
  }, []);

  return (
    <div className="TransactionSection">
      <FilterTransactions />
      <div className="TransactionSection-render"></div>
    </div>
  );
};

export default Statistics;
