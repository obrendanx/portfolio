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
            description="This is my inaugural React project, initially centered solely on the front-end aspect. I delved into various techniques, including hooks, API data fetching, and mastering the fundamentals of JSX. However, over time, the project has evolved to encompass its own backend, with a range of microservices covering authentication, user profiles, forum interaction, and favoriting functionalities. Presently, the primary goal of this project is to further develop these microservices to operate seamlessly alongside one another, each running in its own dedicated Docker container, and to build on the JEST testing libary to ensure my components are clean and bug free when deployed to provided a better user experience"
        />
        <Card 
            title="Blog Page" 
            tags={blogTags} 
            image={blogsite}
            link="https://blog-rnmz.onrender.com/"
            description="This project marked a departure from the basic HTML and CSS format, representing one of my early forays into more complex web development. It consists of a single-page blog design. During its development, I embarked on a journey to gain proficiency in Node and Gulp. Leveraging these tools, I harnessed the power of the SASS processor to elevate my CSS to new heights. These skills became invaluable assets as I advanced into more intricate React projects."
        />
        <Card 
            title="Documentation Page" 
            tags={docTags} 
            image={docpage}
            link="https://documentation-page-11sw.onrender.com/"
            description="I created a basic Python documentation webpage during my studies of JavaScript, courtesy of the excellent FreeCodeCamp web development course. This experience laid the essential foundations for my journey into web development and ignited my passion for crafting web pages."
        />
        <Card 
            title="Book Store Page" 
            tags={bookTags} 
            image={bookstore}
            link="https://book-page.onrender.com/"
            description="This is a modest book store webpage that started as a side project for a friend. It provided me with an opportunity to deepen my knowledge of Gulp and Node. Through this project, I expanded my proficiency in automating tasks with Gulp and experienced firsthand the substantial benefits it brings to the development process."
        />
    </Wrapper>
  )
}

export default PortfolioCard