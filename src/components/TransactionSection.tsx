import React, { Component, useEffect, useState } from 'react';
import FilterTransactions from './FilterTransactions';
import TransactionItem from './TransactionItem';
import Loader from './Loader';
import fire from './fire';
import './TransactionSection.scss';

interface User {
  amount: string;
  currency: string;
  date: string;
  id: string;
  method: string;
  payed: string;
  time: string;
}

const Statistics = () => {
  const [history, setHistory] = useState<User[]>();
  const [filterSort, setFilterSort] = useState('');
  const [filterAmount, setFilterAmount] = useState('');
  const [filterCurrency, setFilterCurrency] = useState('');
  const [filterDate, setFilterDate] = useState('LATEST');
  const [filterStartDate, setFilterStartDate] = useState('');
  const [filterEndDate, setFilterEndDate] = useState('');
  const historyRef = fire.database().ref('/history');

  useEffect(() => {
    const gotData = (data: any) => {
      let transformedData = data.val();
      const fetchedData = [];
      for (let key in transformedData) {
        fetchedData.push({
          ...transformedData[key],
          id: key,
        });
      }
      setHistory(fetchedData);
    };

    const errData = (err: any) => {
      console.log(err);
    };
    const database = fire.database();
    historyRef.on('value', gotData, errData);
  }, []);

  const renderTransactions = () => {
    let forRender: any[] = [];

    history?.map((item) =>
      forRender.push(
        <TransactionItem
          amount={item.amount}
          currency={item.currency}
          date={item.date}
          payed={item.payed}
          time={item.time}
          method={item.method}
        />
      )
    );

    if (filterSort) {
      if (filterSort === 'BUY') {
        forRender = forRender.filter((item) => item.props.method === 'buy');
      } else {
        forRender = forRender.filter((item) => item.props.method === 'sell');
      }
    }
    if (filterAmount) {
      if (filterAmount === 'HIGH') {
        forRender = forRender.sort((a, b) => b.props.payed - a.props.payed);
      } else {
        forRender = forRender.sort((a, b) => a.props.payed - b.props.payed);
      }
    }
    if (filterCurrency) {
      forRender = forRender.filter(
        (item) => item.props.currency === filterCurrency
      );
    }
    if (filterDate) {
      if (filterDate === 'LATEST') {
        forRender = forRender.sort((a: any, b: any) => {
          a = new Date(a.props.date);
          b = new Date(b.props.date);
          return b - a;
        });
      } else {
        forRender = forRender.sort((a: any, b: any) => {
          a = new Date(a.props.date);
          b = new Date(b.props.date);
          return a - b;
        });
      }
    }
    if (filterStartDate) {
      forRender = forRender.filter((item) => {
        item = new Date(item.props.date);
        let selectedDate = new Date(filterStartDate);
        if (item > selectedDate) {
          return item;
        } else {
          return null;
        }
      });
    }
    if (filterEndDate) {
      forRender = forRender.filter((item) => {
        item = new Date(item.props.date);
        let selectedDate = new Date(filterEndDate);
        if (item < selectedDate) {
          return item;
        } else {
          return null;
        }
      });
    }
    return forRender;
  };

  return (
    <div className="TransactionSection" data-simplebar>
      <FilterTransactions
        setFilterSort={setFilterSort}
        setFilterAmount={setFilterAmount}
        setFilterDate={setFilterDate}
        setFilterCurrency={setFilterCurrency}
        setFilterStartDate={setFilterStartDate}
        setFilterEndDate={setFilterEndDate}
      />
      <table className="TransactionSection-table">
        {history ? (
          renderTransactions()
        ) : (
          <div className="TransactionSection-loader">
            <Loader />
          </div>
        )}
      </table>
    </div>
  );
};

export default Statistics;
