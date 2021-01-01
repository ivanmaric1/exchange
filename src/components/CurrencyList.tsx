import React, { useState, useEffect } from 'react';
import Currency from './Currency';
import Loader from './Loader';
import './CurrencyList.scss';

interface Props {
  currencyList: any;
}

const CurrencyList: React.FC<Props> = ({ currencyList }) => {
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    setLoadedData(true);
  }, [currencyList]);

  return (
    <div className="CurrencyList">
      {!currencyList ? (
        <>
          <h3>CURRENCY LIST</h3>

          <ul className="Currency">
            <li className="big legend">COUNTRY</li>
            <li className="legend">CURRENCY</li>
            <li className="small legend">UNIT</li>
            <li className="legend">BUY CURRENCY</li>
            <li className="legend">SELL CURRENCY</li>
          </ul>

          {defaultCurrency.map((item: any) => (
            <Currency
              država={item.Država}
              valuta={item.Valuta}
              jedinica={item.Jedinica}
              prodajni={item['Prodajni za devize']}
              kupovni={item['Kupovni za devize']}
              key={item.Država}
            />
          ))}
        </>
      ) : (
        <>
          <h3>
            CURRENCY LIST -
            {loadedData ? currencyList[0]['Datum primjene'] : null}-
          </h3>

          <ul className="Currency">
            <li className="big legend">COUNTRY</li>
            <li className="legend">CURRENCY</li>
            <li className="small legend">UNIT</li>
            <li className="legend">BUY CURRENCY</li>
            <li className="legend">SELL CURRENCY</li>
          </ul>

          {currencyList
            ? currencyList.map((item: any) => (
                <Currency
                  država={item.Država}
                  valuta={item.Valuta}
                  jedinica={item.Jedinica}
                  prodajni={item['Prodajni za devize']}
                  kupovni={item['Kupovni za devize']}
                  key={item.Država}
                />
              ))
            : null}
        </>
      )}
    </div>
  );
};

export default CurrencyList;

const defaultCurrency = [
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'Australija',
    'Šifra valute': '036',
    Valuta: 'AUD',
    Jedinica: 1,
    'Kupovni za devize': '4,663361',
    'Srednji za devize': '4,677393',
    'Prodajni za devize': '4,691425',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'Kanada',
    'Šifra valute': '124',
    Valuta: 'CAD',
    Jedinica: 1,
    'Kupovni za devize': '4,790562',
    'Srednji za devize': '4,804977',
    'Prodajni za devize': '4,819392',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'Češka',
    'Šifra valute': '203',
    Valuta: 'CZK',
    Jedinica: 1,
    'Kupovni za devize': '0,286194',
    'Srednji za devize': '0,287055',
    'Prodajni za devize': '0,287916',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'Danska',
    'Šifra valute': '208',
    Valuta: 'DKK',
    Jedinica: 1,
    'Kupovni za devize': '1,010645',
    'Srednji za devize': '1,013686',
    'Prodajni za devize': '1,016727',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'Mađarska',
    'Šifra valute': '348',
    Valuta: 'HUF',
    Jedinica: 100,
    'Kupovni za devize': '2,063544',
    'Srednji za devize': '2,069753',
    'Prodajni za devize': '2,075962',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'Japan',
    'Šifra valute': '392',
    Valuta: 'JPY',
    Jedinica: 100,
    'Kupovni za devize': '5,918796',
    'Srednji za devize': '5,936606',
    'Prodajni za devize': '5,954416',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'Norveška',
    'Šifra valute': '578',
    Valuta: 'NOK',
    Jedinica: 1,
    'Kupovni za devize': '0,712203',
    'Srednji za devize': '0,714346',
    'Prodajni za devize': '0,716489',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'Švedska',
    'Šifra valute': '752',
    Valuta: 'SEK',
    Jedinica: 1,
    'Kupovni za devize': '0,745617',
    'Srednji za devize': '0,747861',
    'Prodajni za devize': '0,750105',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'Švicarska',
    'Šifra valute': '756',
    Valuta: 'CHF',
    Jedinica: 1,
    'Kupovni za devize': '6,926076',
    'Srednji za devize': '6,946917',
    'Prodajni za devize': '6,967758',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'Velika Britanija',
    'Šifra valute': '826',
    Valuta: 'GBP',
    Jedinica: 1,
    'Kupovni za devize': '8,276668',
    'Srednji za devize': '8,301573',
    'Prodajni za devize': '8,326478',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'SAD',
    'Šifra valute': '840',
    Valuta: 'USD',
    Jedinica: 1,
    'Kupovni za devize': '6,137724',
    'Srednji za devize': '6,156193',
    'Prodajni za devize': '6,174662',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'Bosna i Hercegovina',
    'Šifra valute': '977',
    Valuta: 'BAM',
    Jedinica: 1,
    'Kupovni za devize': '3,843315',
    'Srednji za devize': '3,854880',
    'Prodajni za devize': '3,866445',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'EMU',
    'Šifra valute': '978',
    Valuta: 'EUR',
    Jedinica: 1,
    'Kupovni za devize': '7,516871',
    'Srednji za devize': '7,539489',
    'Prodajni za devize': '7,562107',
  },
  {
    'Broj tečajnice': '252',
    'Datum primjene': '30.12.2020',
    Država: 'Poljska',
    'Šifra valute': '985',
    Valuta: 'PLN',
    Jedinica: 1,
    'Kupovni za devize': '1,659646',
    'Srednji za devize': '1,664640',
    'Prodajni za devize': '1,669634',
  },
];
