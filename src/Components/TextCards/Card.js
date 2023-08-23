import React from 'react';
import styled from '@emotion/styled';
import { BsGithub } from "react-icons/bs";

const Tags = styled.div`
    height:30px;
    width:100%;
    margin-top:15px;
`

const Tag = styled.span`
    margin-left:5px;
    color:#000;
    background:rgba(183, 173, 207, 0.6);
    padding:5px;
    &:hover{
        color:#DEE7E7;
        transition:0.25s;
    }
`

const Link = styled.a`
    color:#000;
    text-decoration:none;
    &:hover{
        color:#DEE7E7;
    }
    @media (max-width: 720px) {
        text-decoration:underline;
    }
`

const Header = styled.h2`
    text-transform:uppercase;
    font-size:1.2em;
    font-family: 'Smooch Sans', sans-serif;
    font-weight:600;
`

// const Description = styled.p`
//     min-height:100px;
//     font-size:1.3em;
//     color:#000;
//     font-weight:900;
//     font-family: 'Smooch Sans', sans-serif;
//     font-size:1em;
//     padding:10px;
// `

const Git = styled.div`

`

const MainWrap = styled.div`
    min-height:150px;
    width:80%;
    padding:2%;
    margin-bottom:50px;
    display:flex;
    flex-direction:row;
    &:hover{
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.5);
        border-radius:20px;
        transition:0.5s;
    }
    @media (max-width: 900px) {
        width: 80%;
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.5);
        border-radius:20px;
    }
    @media (max-width: 720px) {
        flex-direction:column-reverse;
        height:320px;
        padding:3%;
    }
`

const Image = styled.div`
    height:120px;
    width:20%;
    img{
        height:100%;
        width:100%;
        &:hover{
            opacity:0.8;
            transition:0.5s;
        }
    }
    @media (max-width: 900px) {
        width:30%;
    }
    @media (max-width: 720px) {
        width:100%;
        height:200px;
    }
`

function Card({ title, tags, link, image, description, git }) {
    const Wrapper = styled.div`
        min-height:120px;
        width:80%;
        padding:10px 2% 10px 2%;
        position:relative;
        border-radius:5px 5px 0% 0;
        @media (max-width: 720px) {
            width:100%;
            min-height:100px;
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
            {/* <Description>{description}</Description> */}
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