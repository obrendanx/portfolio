import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
    height:100vh;
    width:100vw;
    background:#B7ADCF;
    display:block;
    text-align:center;
`

const HeaderOne = styled.h1`
    position:relative;
    top:40%;
    padding:10px;
    font-size:3em;
    color:#DEE7E7;
`

const HeaderTwo = styled.h3`
    position:relative;
    top:40%;
    padding:10px;
    font-size:2em;
    font-weight:lighter;
    color:#535657;
`

function WelcomeCard() {
  return (
    <Wrapper id="welcome">
        <HeaderOne>Hey I am Brendan</HeaderOne>
        <HeaderTwo>a web developer</HeaderTwo>
    </Wrapper>
  )
}

export default WelcomeCard