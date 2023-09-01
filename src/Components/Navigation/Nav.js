import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  height:60px;
  width:100vw;
  position:fixed;
  background:#DEE7E7;
  z-index:1;
`

const List = styled.ul`
  list-style:none;
`

const ListItem = styled.li`
  display:inline-block;
  margin-left:10px;
`

const Link = styled.a`
  display:block;
  height:60px;
  width:100px;
  text-transform:uppercase;
  text-decoration:none;
  line-height:60px;
  color:#535657;
  font-family: 'Smooch Sans', sans-serif;
  font-weight:600;
  font-size:1.1em;
  text-align:center;
  &:hover{
    border-bottom:solid 4px #535657;
  }
`

const Navbar = styled.nav`
  margin-left:15px;
`

function Nav() {
  return (
    <Wrapper>
      <Navbar>
        <List>
          <ListItem><Link href="#welcome">Welcome</Link></ListItem>
          <ListItem><Link href="#projects">Projects</Link></ListItem>
          <ListItem><Link href="#contact">Contact</Link></ListItem>
        </List>
      </Navbar>
    </Wrapper>
  )
}

export default Nav