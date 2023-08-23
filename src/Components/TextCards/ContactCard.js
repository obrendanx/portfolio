import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.div`
    height:100vh;
    width:100vw;
    background:#C5CFAD;
    scroll-margin-top: 50px;
    text-align:center;
`

const Header = styled.h2`
    height:25px;
    font-size:50px;
    font-family: 'Smooch Sans', sans-serif;
`

const ListItem = styled.li`
    display:inline-block;
    margin:30px;
    position:relative;
    height:25px;
    top:100px;
    font-size:1.5em;
`

const Link = styled.a`
    color:#535657;
    text-decoration:none;
    text-transform:uppercase;
    transition: 1s;
    &:hover{
        color:#B7ADCF;
    }
`

const SubWrap = styled.div`
    padding-top:30vh;
`

const List = styled.ul`
    
`

function ContactCard() {
  return (
    <Wrapper id="contact">
        <SubWrap>
            <Header>Lets work together</Header>

            <div>
            <nav>
                <List>
                    <ListItem><Link href="https://gitlab.com/obrendanx"><i class="fab fa-github"></i></Link></ListItem>
                    <ListItem><Link href="www.linkedin.com/in/brendan-ewen-8aa0b322a"><i class="fab fa-linkedin"></i></Link></ListItem>
                    <ListItem><Link href="mailto:brendanewen16@outlook.com"><i class="fas fa-at"></i></Link></ListItem>
                    <ListItem><Link href="tel:07904576057"><i class="fas fa-mobile-alt"></i></Link></ListItem>
                </List>
            </nav>
            </div>
        </SubWrap>
    </Wrapper>
  )
}

export default ContactCard