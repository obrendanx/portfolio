import React from 'react';
import styled from '@emotion/styled';
import { BsGithub } from "react-icons/bs";

const Tags = styled.div`
    max-height:60px;
    width:100%;
    margin-top:15px;
`

const Tag = styled.span`
    margin-left:5px;
    color:#fff;
    background:rgba(183, 173, 207, 0.6);
    padding:5px;
    transition:0.25s;
    &:hover{
        color:#DEE7E7;
        backdrop-filter: blur(50px);
    }
`

const Link = styled.a`
    color:#B7ADCF;
    text-decoration:none;
    &:hover{
        color:#DEE7E7;
    }
    @media (max-width: 720px) {
        text-decoration:underline;
    }
`

const Header = styled.h2`
    height:20px;
    text-transform:uppercase;
    font-size:1.4em;
    font-family: 'Smooch Sans', sans-serif;
    font-weight:600;
    @media (max-width: 900px) {
        font-size:1.2em;
    }
`

const Description = styled.p`
    min-height:230px;
    font-size:1.3em !important;
    color:#fff;
    font-weight:900;
    font-family: 'Smooch Sans', sans-serif;
    font-size:1em;
    padding:10px;
    @media (max-width: 900px) {
        font-size:1em;
    }
    @media (max-width: 720px) {
        display:none;
    }
`

const Git = styled.div`

`

const MainWrap = styled.div`
    width: 80%;
    min-height: 300px;
    background: inherit;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    padding: 2rem;
    box-sizing: border-box;
    box-shadow: 0 .5em 1em rgba(0,0,0,.3);
    margin-bottom:50px;
    display:flex;
    flex-direction:row;
    gap:1%;
    border-radius:10px;
    transition:0.25s;

    &:hover{
        backdrop-filter: blur(50px);
    }

    &:before{
        content: "";
        position: absolute;
        z-index: -1;
        top: 0; right: 0; bottom: 0; left: 0;
        background: inherit;
        box-shadow: inset 0 0 3000px rgba(255,255,255,.5);
        filter: blur(10px);
        margin: -20px;
    }

    @media (max-width: 900px) {
        backdrop-filter: blur(50px);
    }
    @media (max-width: 720px) {
        flex-direction:column;
    }
`

const Image = styled.div`
    height:300px;
    width:39%;
    img{
        height:100%;
        width:100%;
        &:hover{
            opacity:0.8;
            transition:0.5s;
        }
    }
    @media (max-width: 720px) {
        width:100%;
    }
`

function Card({ title, tags, link, image, description, git }) {
    const Wrapper = styled.div`
        min-height:300px;
        width:59%;
        padding:10px 2% 10px 2%;
        position:relative;
        border-radius:5px 5px 0% 0;
        @media (max-width: 720px) {
            width:100%;
            min-height:80px;
        }
    `

  return (
      <MainWrap>
        <Image>
            <img src={image} alt="portfolio card here"/>
        </Image>
        <Wrapper>
            <Header>
            <Link href={link} target="_blank">
                {title}
            </Link>
            </Header>
            <Description>{description}</Description>
            <Tags>
            {tags.map((tag, index) => (
                <Tag key={index} className="tag">
                {tag}
                </Tag>
            ))}
            </Tags>
            {/* <Git><a href={git}><BsGithub/></a></Git> */}
        </Wrapper>
      </MainWrap>
  );
}

export default Card;