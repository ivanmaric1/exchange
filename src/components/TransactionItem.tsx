import React from 'react';
import './TransactionItem.scss';

interface Props {
  amount: string;
  currency: string;
  date: string;
  payed: string;
  time: string;
  method: string;
}

const TransactionItem: React.FC<Props> = ({
  amount,
  currency,
  date,
  payed,
  time,
  method,
}) => {
  return (
    <div className="TransactionItem">
      <tr>
        <td>{method.toUpperCase() + 'ED'}</td>
        <td>{amount}</td>
        <td>{currency}</td>
        <td>{payed}</td>
        <td>{date}</td>
        <td>{time}</td>
      </tr>
    </div>
  );
};

export default TransactionItem;
