import React from 'react'
import styled from '@emotion/styled'
import Card from './Card'

//Card Images
import gamesite from '../../Images/gamesite.png'
import blogsite from '../../Images/blogsite.PNG'
import bookstore from '../../Images/curtissite.PNG'
import docpage from '../../Images/docpage.PNG'

const Wrapper = styled.div`
    min-height:500px;
    width:100%;
    background:#535657;
    padding-top:50px;
    padding-bottom:50px;
    scroll-margin-top: 50px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    gap:5%;
`

function PortfolioCard() {
    const gamesiteTags = ["React", "NodeJS", "MongoDB", "Express"];
    const blogTags = ["Sass", "NodeJS", "HTML5", "CSS3"];
    const docTags = ["HTML5", "CSS3"];
    const bookTags = ["Sass", "NodeJS", "HTML5", "CSS3"]

  return (
    <Wrapper id="projects">   
        <Card 
            title="Japanese Animation Information Site" 
            tags={gamesiteTags} link="https://bewen.net" 
            image={gamesite}
            description="This REACT app I have made is designed to inform users 
            about various japanese media. Currently the user can make their own 
            account, make fourm posts, save their favourite anime as well as keep 
            track of the episode and season they are on by visiting their profile page."
        />
        <Card 
            title="Blog Page" 
            tags={blogTags} 
            imag={blogsite}
            link="https://blog-rnmz.onrender.com/"
            description="A basic blog webpage layout"
        />
        <Card 
            title="Documentation Page" 
            tags={docTags} 
            image={docpage}
            link="https://documentation-page-11sw.onrender.com/"
            description="A simple python documentation page"
        />
        <Card 
            title="Book Store Page" 
            tags={bookTags} 
            image={bookstore}
            link="https://book-page.onrender.com/"
            description="A simple book store page"
        />
    </Wrapper>
  )
}

export default PortfolioCard