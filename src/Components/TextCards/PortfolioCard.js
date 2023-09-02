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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor nunc, tristique id arcu sit amet, sollicitudin vestibulum tortor. Fusce imperdiet sed magna ut mollis. Phasellus sit amet pulvinar metus, consequat auctor risus. Cras at luctus leo. Mauris at semper velit. Aliquam nunc risus, pharetra ut nunc pellentesque, sollicitudin consectetur nunc. "
        />
        <Card 
            title="Blog Page" 
            tags={blogTags} 
            image={blogsite}
            link="https://blog-rnmz.onrender.com/"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor nunc, tristique id arcu sit amet, sollicitudin vestibulum tortor. Fusce imperdiet sed magna ut mollis. Phasellus sit amet pulvinar metus, consequat auctor risus. Cras at luctus leo. Mauris at semper velit. Aliquam nunc risus, pharetra ut nunc pellentesque, sollicitudin consectetur nunc. "
        />
        <Card 
            title="Documentation Page" 
            tags={docTags} 
            image={docpage}
            link="https://documentation-page-11sw.onrender.com/"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor nunc, tristique id arcu sit amet, sollicitudin vestibulum tortor. Fusce imperdiet sed magna ut mollis. Phasellus sit amet pulvinar metus, consequat auctor risus. Cras at luctus leo. Mauris at semper velit. Aliquam nunc risus, pharetra ut nunc pellentesque, sollicitudin consectetur nunc. "
        />
        <Card 
            title="Book Store Page" 
            tags={bookTags} 
            image={bookstore}
            link="https://book-page.onrender.com/"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor nunc, tristique id arcu sit amet, sollicitudin vestibulum tortor. Fusce imperdiet sed magna ut mollis. Phasellus sit amet pulvinar metus, consequat auctor risus. Cras at luctus leo. Mauris at semper velit. Aliquam nunc risus, pharetra ut nunc pellentesque, sollicitudin consectetur nunc. "
        />
    </Wrapper>
  )
}

export default PortfolioCard