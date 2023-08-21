import './scss/App.css';
import Nav from './Components/Navigation/Nav';
import WelcomeCard from './Components/TextCards/WelcomeCard';
import PortfolioCard from './Components/TextCards/PortfolioCard';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="filler">&nbsp;</div>
      <WelcomeCard/>
      <PortfolioCard/>
    </div>
  );
}

export default App;
