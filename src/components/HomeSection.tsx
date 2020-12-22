import tw from '../img/tw.png';
import './HomeSection.scss';

const HomeSection = () => {
  return (
    <div className="HomeSection">
      <div className="HomeSection-description">
        <p>If you want to buy foreign currency, click on buy!</p>
        <p>If you want to sell foreign currency, click on sell!</p>
        <p>The transaction menu shows the history of completed transactions.</p>
        <p>
          In the options menu it is possible to deposit and withdraw money to
          the cashier.
        </p>
        <div className="HomeSection-support">
          <div className="HomeSection-support-left">
            <h3>Support for users:</h3>
            <p>Monday – Friday 16:00-20:00 - 095/6662222, 098/697697</p>
            <p>Saturday 08:15:00 – 095/7776666, 098/735637</p>
            <p>e-mail: info@exchangemaster.hr</p>
          </div>
          <div className="HomeSection-support-right">
            <h3>Remote support</h3>
            <p>
              Click on the blue icon to launch the program to connect on
              ExchangeMaster d.o.o. - Team Viewer.
            </p>
            <img src={tw} alt="TeamWiewer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
