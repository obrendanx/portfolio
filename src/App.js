import './scss/App.css';
import Nav from './Components/Navigation/Nav';
import WelcomeCard from './Components/TextCards/WelcomeCard';
import PortfolioCard from './Components/TextCards/PortfolioCard';
import ContactCard from './Components/TextCards/ContactCard';
import styled from '@emotion/styled';

const Footer = styled.div`
  position:absolute;
  width:100vw;
  height:10vh;
  background:#DEE7E7;
  bottom:0;
  @media (max-width: 900px) {
    font-size:0.6em;
  }
  @media (max-width: 650px) {
    font-size:0.4em;
  }
`

const ParagraphLeft = styled.p`
  color:#535657;
  line-height:10vh;
  margin-left:15px;
  margin-right:15px;
  float-left;
`

const ParagrapghRight = styled.p`
  color:#535657;
  line-height:10vh;
  margin-left:15px;
  margin-right:15px;
`

const Right = styled.div`
  float:left;
  width:60%;
`

const Left = styled.div`
  margin-right:15px;
  float:right;
`

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="filler">&nbsp;</div>
      <WelcomeCard/>
      <PortfolioCard/>
      <ContactCard/>

      <Footer>
          <Left>
            <ParagraphLeft>LOWESTOFT | UK</ParagraphLeft>
            <p id="currenttime"></p>
          </Left>
          <Right>
            <ParagrapghRight>Design by Brendan Ewen</ParagrapghRight>
          </Right>
      </Footer>
    </div>
  );
}

export default App;
