import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import './scss/App.css';
import Nav from './Components/Navigation/Nav';
import WelcomeCard from './Components/TextCards/WelcomeCard';
import PortfolioCard from './Components/TextCards/PortfolioCard';
import ContactCard from './Components/TextCards/ContactCard';
import styled from '@emotion/styled';

const Footer = styled.div`
  position: absolute;
  width: 100vw;
  height: 10vh;
  background: #DEE7E7;
  bottom: 0;
  @media (max-width: 900px) {
    font-size: 0.6em;
  }
  @media (max-width: 650px) {
    font-size: 0.4em;
  }
`;

const ParagraphLeft = styled.p`
  color: #535657;
  line-height: 10vh;
  margin-left: 15px;
  margin-right: 15px;
  float: left;
`;

const ParagrapghRight = styled.p`
  color: #535657;
  line-height: 10vh;
  margin-left: 15px;
  margin-right: 15px;
`;

const Right = styled.div`
  float: left;
  width: 60%;
`;

const Left = styled.div`
  margin-right: 15px;
  float: right;
`;

const auraStyles = css`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #00aaff;
  border-radius: 50%;
  transform-origin: center;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 9999;
  transition: all 0.3s ease; /* Add a transition for smooth changes */
`;

const auraPointerStyles = css`
  position: absolute;
  width: 45px;
  height: 45px;
  background-color: #00aaff;
  border-radius: 50%;
  transform-origin: center;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 9999;
  transition: all 0.3s ease; /* Add a transition for smooth changes */
`;

const App = () => {
  const [isCursorPointer, setIsCursorPointer] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      if(isCursorPointer) {
        setPosition({ x: e.clientX - 10, y: e.clientY + window.scrollY - 20});
      } else {
        setPosition({ x: e.clientX, y: e.clientY + window.scrollY - 10 });
      }
    };

    const checkCursorPointer = () => {
      setIsCursorPointer(true);
    };

    const checkCursorDefault = () => {
      setIsCursorPointer(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', checkCursorPointer);
    window.addEventListener('mouseleave', checkCursorDefault);

    // Add event listeners for specific elements (e.g., links)
    const links = document.querySelectorAll('a'); // Change 'a' to select other elements as needed

    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        setIsCursorPointer(true);
      });

      link.addEventListener('mouseleave', () => {
        setIsCursorPointer(false);
      });
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', checkCursorPointer);
      window.removeEventListener('mouseleave', checkCursorDefault);

      // Remove event listeners for specific elements
      links.forEach((link) => {
        link.removeEventListener('mouseenter', () => {
          setIsCursorPointer(true);
        });

        link.removeEventListener('mouseleave', () => {
          setIsCursorPointer(false);
        });
      });
    };
  }, [isCursorPointer]);

  return (
    <div className="App" style={{ cursor: isCursorPointer ? 'pointer' : 'default' }}>
      <Nav />
      <div className="filler">&nbsp;</div>
      <WelcomeCard />
      <PortfolioCard />
      <ContactCard />

      <Footer>
        <Left>
          <ParagraphLeft>LOWESTOFT | UK</ParagraphLeft>
          <p id="currenttime"></p>
        </Left>
        <Right>
          <ParagrapghRight>Design by Brendan Ewen</ParagrapghRight>
        </Right>
      </Footer>
      <div
        className={`${auraStyles} ${isCursorPointer ? auraPointerStyles : ''}`}
        style={{ left: position.x - 10, top: position.y }}
      ></div>
    </div>
  );
};

export default App;