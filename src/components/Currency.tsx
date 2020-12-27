import React from 'react';
import './Currency.scss';

interface Props {
  država: string;
  valuta: string;
  jedinica: number;
  kupovni: string;
  prodajni: string;
}

const Currency: React.FC<Props> = ({
  država,
  valuta,
  jedinica,
  kupovni,
  prodajni,
}) => {
  return (
    <ul className="Currency">
      <li className="big">{država}</li>
      <li className="small">{valuta}</li>
      <li className="small">{jedinica}</li>
      <li>{kupovni}</li>
      <li>{prodajni}</li>
    </ul>
  );
};

export default Currency;
