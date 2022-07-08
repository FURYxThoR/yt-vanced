import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from "react-router-dom";

const Container = styled.div`
display: flex;
width: 360px;
flex-wrap:wrap;
margin-bottom: 45px;
cursor:pointer;
`;  

const Image = styled.img`
width: 100%;
height: 200px;
background-color: #909090;
gap:5px;
`;

const Details = styled.div`
display: flex;
margin-top:15px;
gap:13px;
`;

const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius:50%;
background-color: #999;
`;

const Texts = styled.div`
align-items: flex;`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({type}) => {
  return (
    <NavLink to="video/test" style={{ textDecoration: "none" }}>   
      <Container >
         <Image
          type={type}
          src="https://warmcoder.com/wp-content/uploads/2021/07/Pink-and-Purple-Sporty-Gradient-Fitness-YouTube-Thumbnail-1.jpg"
        />
        <Details >
        {/* type={type} */}
          <ChannelImage
            // type={type}
            src="https://yt3.ggpht.com/yti/APfAmoEvMB6iXbDIrx-7vCTVe4XQqwtDiwynlmStGGnt544=s108-c-k-c0x00ffffff-no-rj"
          />
          <Texts>
            <Title>Android 12</Title>
            <ChannelName>FURYxThoR</ChannelName>
            <Info>69,420 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
   </NavLink>
 
  )
}

export default Card