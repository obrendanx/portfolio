import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import picture from '../../Images/IMG_3863.JPG'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #b7adcf;
  display: block;
  text-align: center;
  position: relative;
  display:flex;
  flex-direction:row;
`;

const HeaderOne = styled.h1`
  position: relative;
  top: 40%;
  padding: 10px;
  font-size: 3em;
  color: #dee7e7;
  @media (max-width: 900px) {
      font-size:2.5em;
  }
  @media (max-width: 720px) {
      font-size:3em;
  }
`;

const HeaderTwo = styled.h3`
  position: relative;
  top: 40%;
  padding: 10px;
  font-size: 2em;
  font-weight: lighter;
  color: #535657;
  @media (max-width: 900px) {
      font-size:1.5em;
  }
  @media (max-width: 720px) {
      font-size:2em;
  }
`;

const Image = styled.div`
  position:relative;
  height:30%;
  width:40%;
  margin-left:30%;
  box-shadow: 0 0 50px #ccc;
  border-radius:50%;
  top:35%;
  transition:0.5s;
  background: url(${picture});
  background-position: 55% 30%;
  background-size:100%;
  background-repeat:no-repeat;
  @media (max-width: 1200px) {
      background-size:130%;
  }
  @media (max-width: 720px) {
      font-size:2em;
  }
  @media (max-width: 900px) {
      height:25%;
  }
  &:hover{
    opacity:0.9;
  }
`

function WelcomeCard() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [scrollTrue, setScrollTrue] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentPosition(window.scrollY);

      if(currentPosition > (window.innerHeight * 0.2)){
        setScrollTrue(true);
      } else if(currentPosition > (window.innerHeight * 1)){
        setScrollTrue(false);
      } else if (currentPosition < (window.innerHeight * 0.2)){
        setScrollTrue(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPosition]);

  return (
    <Wrapper id="welcome">
      <div className={css`
        width:40%;
        margin-left:5%;
        
        @media (max-width: 900px) {
            margin-left:2.5%;
            width:45%;
        }
        @media (max-width: 720px) {
            display:none;
        }
      `}>
        <Image />
      </div>
      <div className={css`
        width:60%;
        @media (max-width: 720px) {
            width:100% !important;
            margin-left:0 !important;
        }
        @media (max-width: 900px) {
            width:45%;
            margin-left:0;
        }
      `}>
        <HeaderOne>Hey, I am Brendan</HeaderOne>
        <HeaderTwo>a web developer <span>{scrollTrue ? "</>" : "<>" }</span></HeaderTwo>
      </div>
    </Wrapper>
  );
}

export default WelcomeCard;