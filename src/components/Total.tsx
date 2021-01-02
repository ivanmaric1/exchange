import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import './Total.scss';

interface Props {
  total: any;
}

const Total: React.FC<Props> = ({ total }) => {
  const [serverData, setServerData] = useState([]);
  useEffect(() => {
    setServerData(total);
  }, [total]);

  const renderServerTotal = () => {
    let forRender = [];
    const keys: any = Object.keys(serverData);
    for (let i = 0; i < keys.length; i++) {
      // .replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
      forRender.push(
        <p key={i}>
          {keys[i]} : {serverData[keys[i]]}
        </p>
      );
    }
    return forRender;
  };

  return (
    <div className="Total">
      {!serverData ? (
        <Loader />
      ) : (
        <>
          <h3>TOTAL</h3>
          <div className="Total-data">{renderServerTotal()}</div>
        </>
      )}
    </div>
  );
};

export default Total;
