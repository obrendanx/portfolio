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
`

const ListItem = styled.li`
    display:inline-block;
    margin-left:30px;
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

function ContactCard() {
  return (
    <Wrapper id="contact">
        <SubWrap>
            <Header>Lets work together...</Header>

            <div class="social_links">
            <nav>
                <ul>
                <ListItem><Link href="#"><i class="fab fa-facebook-square"></i> Facebook</Link></ListItem>
                <ListItem><Link href="https://gitlab.com/obrendanx"><i class="fab fa-github"></i> Github</Link></ListItem>
                <ListItem><Link href="#"><i class="fab fa-twitter"></i> Twitter</Link></ListItem>
                <ListItem><Link href="mailto:brendanewen16@outlook.com"><i class="fas fa-at"></i> Send a mail</Link></ListItem>
                <ListItem><Link href="tel:07904576057"><i class="fas fa-mobile-alt"></i> Call me</Link></ListItem>
                </ul>
            </nav>
            </div>
        </SubWrap>
    </Wrapper>
  )
}

export default ContactCard