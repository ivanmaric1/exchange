import { Console } from 'console';
import React from 'react';
import './FilterTransactions.scss';

interface Props {
  setFilterSort: (str: string) => void;
  setFilterAmount: (str: string) => void;
  setFilterDate: (str: string) => void;
  setFilterCurrency: (str: string) => void;
  setFilterStartDate: (str: string) => void;
  setFilterEndDate: (str: string) => void;
}

const FilterTransactions: React.FC<Props> = ({
  setFilterSort,
  setFilterAmount,
  setFilterDate,
  setFilterCurrency,
  setFilterStartDate,
  setFilterEndDate,
}) => {
  return (
    <div className="FilterTransactions">
      <select onChange={(e: any) => setFilterSort(e.target.value)}>
        <option value="">BUYED AND SOLD</option>
        <option value="BUY">BUYED</option>
        <option value="SELL">SOLD</option>
      </select>
      <select onChange={(e: any) => setFilterAmount(e.target.value)}>
        <option value="">ORDER BY AMOUNT PAYED</option>
        <option value="HIGH">FROM HIGHEST</option>
        <option value="LOW">FROM LOWEST</option>
      </select>
      <select onChange={(e: any) => setFilterCurrency(e.target.value)}>
        <option value="">ORDER BY CURRENCY</option>
        <option value="AUD">AUD</option>
        <option value="CAD">CAD</option>
        <option value="CZK">CZK</option>
        <option value="DKK">DKK</option>
        <option value="HUF">HUF</option>
        <option value="JPY">JPY</option>
        <option value="NOK">NOK</option>
        <option value="SEK">SEK</option>
        <option value="CHF">CHF</option>
        <option value="GPB">GPB</option>
        <option value="USD">USD</option>
        <option value="BAM">BAM</option>
        <option value="EUR">EUR</option>
        <option value="PLN">PLN</option>
      </select>
      <select onChange={(e: any) => setFilterDate(e.target.value)}>
        <option value="">ORDER BY DATE</option>
        <option value="LATEST" selected>
          FROM THE LATEST
        </option>
        <option value="OLDEST">FROM THE OLDEST</option>
      </select>
      <div>
        <label>
          FROM
          <input
            type="date"
            onChange={(e: any) => setFilterStartDate(e.target.value)}
          />
        </label>
        <label>
          TO
          <input
            type="date"
            onChange={(e: any) => setFilterEndDate(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default FilterTransactions;
