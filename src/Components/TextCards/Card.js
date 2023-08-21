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
    color:#fff;
    background:rgba(183, 173, 207, 0.6);
    padding:5px;
`

const Link = styled.a`
    color:#fff;
    text-decoration:none;
    &:hover{
        color:#DEE7E7;
    }
`

const Header = styled.h2`
    text-transform:uppercase;
    font-size:1.2em;
    font-family: 'Smooch Sans', sans-serif;
    font-weight:600;
`

const Description = styled.p`
    max-height:100px;
    font-size:1.3em;
    color:#fff;
    font-weight:900;
    font-family: 'Smooch Sans', sans-serif;
    font-size:1em;
    padding:10px;
    background:#B7ADCF;
    border-radius:0 0 5px 5px;
`

const Git = styled.div`

`

const MainWrap = styled.div`
    height:400px;
    width:40%;
    margin-bottom:50px;
`

function Card({ title, tags, link, image, description, git }) {
    const Wrapper = styled.div`
        height:300px;
        width:100%;
        padding:10px 2% 10px 2%;
        background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${image});
        background-size:100% 100%;
        background-repeat:no-repeat;
        position:relative;
        border-radius:5px 5px 0% 0;
    `

  return (
      <MainWrap>
        <Wrapper>
            <Header>
            <Link href={link} target="_blank">
                {title}
            </Link>
            </Header>
            <Tags>
            {tags.map((tag, index) => (
                <Tag key={index} className="tag">
                {tag}
                </Tag>
            ))}
            </Tags>
            {/* <Git><a href={git}><BsGithub/></a></Git> */}
        </Wrapper>
        <Description>{description}</Description>
      </MainWrap>
  );
}

export default Card;