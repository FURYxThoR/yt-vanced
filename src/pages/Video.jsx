import React from 'react'
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
  text-align: left;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  text-align: left;
`;

const Description = styled.p`
  font-size: 14px;
  text-align: left;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;



const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OWjVxHtDPV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoWrapper>
      <Title>Android 12 - Everything you need to know!</Title>
        <Details>
          <Info>1,702,189 views • July 01, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 786
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/yti/APfAmoEvMB6iXbDIrx-7vCTVe4XQqwtDiwynlmStGGnt544=s108-c-k-c0x00ffffff-no-rj" />
            <ChannelDetail>
              <ChannelName>FURYxThoR</ChannelName>
              <ChannelCounter>200M subscribers</ChannelCounter>
              <Description>
              __________________________________________________________<br />
               Android 12 is almost among us, and with a few leaked <br />screenshots, and documentations we already know what to expect. Watch to find out, and enjoy ! <br />
              __________________________________________________________
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
          &nbsp;&nbsp;&nbsp;
           <NotificationsActiveIcon fontSize="large" cursor="pointer"/>
        </Channel>
        <Hr />
        <Comments/>
      </Content>
      <Recommendation>
      <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        
      </Recommendation>
    </Container>
  )
}

export default Video
