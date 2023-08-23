import React from 'react'
import styled from '@emotion/styled'
import Card from './Card'

//Card Images
import gamesite from '../../Images/gamesite.png'
import blogsite from '../../Images/blogsite.png'
import bookstore from '../../Images/curtissite.PNG'
import docpage from '../../Images/docpage.PNG'

const Wrapper = styled.div`
    min-height:500px;
    width:100%;
    background:#535657;
    padding-top:100px;
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
            title="Anime News" 
            tags={gamesiteTags} link="https://bewen.net" 
            image={gamesite}
        />
        <Card 
            title="Blog Page" 
            tags={blogTags} 
            image={blogsite}
            link="https://blog-rnmz.onrender.com/"
        />
        <Card 
            title="Documentation Page" 
            tags={docTags} 
            image={docpage}
            link="https://documentation-page-11sw.onrender.com/"
        />
        <Card 
            title="Book Store Page" 
            tags={bookTags} 
            image={bookstore}
            link="https://book-page.onrender.com/"
        />
    </Wrapper>
  )
}

export default PortfolioCard