import React from 'react';
import CurrencyList from './CurrencyList';
import Menu from './Menu';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePage-container">
        <Menu />
        <div className="HomePage-content">
          <div className="HomePage-content-action">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis, nobis vero. Id repellat culpa est. Quae ipsam provident
            delectus maxime! Et voluptas minus asperiores laboriosam laudantium,
            ut tempora saepe, pariatur illum incidunt atque doloribus velit
            omnis illo quo? Impedit velit sed nam id in, officia reiciendis
            voluptatem delectus nostrum ab minima. Nisi possimus nostrum aut
            rem, beatae doloremque praesentium inventore velit facere.
            Laudantium voluptatibus amet non dignissimos rerum eius, omnis,
            nihil velit exercitationem possimus adipisci voluptate, soluta
            iusto! Quia cupiditate officia, cumque esse tempora mollitia
            consectetur accusamus! Saepe, ab alias numquam quibusdam illo
            nesciunt obcaecati voluptate reprehenderit fugit ut hic.
          </div>
          <div className="HomePage-content-currency">
            <CurrencyList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
