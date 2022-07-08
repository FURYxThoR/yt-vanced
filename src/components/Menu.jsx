import React from 'react';
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import HistoryIcon from '@mui/icons-material/History';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import {Link} from "react-router-dom";



const Container = styled.div`
flex: 1;
background-color: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.text};
height: 150%;
position: sticky;
top: 0;
`;

const Wrapper = styled.div`
padding: 18px 26px;
`

const Logo = styled.div`
display: flex;
align-items:center;
gap: 5px;
margin-bottom: 25px;
font-size: 14px;
font-weight: bold;
`

const Img = styled.img`
height: 33px;
`

const Item = styled.div`
display: flex;
align-items: center;
font-size: 10px;
gap: 5px;
cursor: pointer;
padding: 3.5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #373737;
`;

const Login = styled.div` `;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 20px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #909090;
  margin-bottom: 20px;
`;



const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Logo>
          <Img 
          src='https://play-lh.googleusercontent.com/gODBykOwosVx396TBPL5LXDPj2jS163UZ0t_nn3OTz4JkCPwKVKATIlC_CDq2Ly9TzE'  height={33} width={33} alt="" />
          YT-VANCED
        </Logo>
        <Item>
            <HomeIcon />
            Home
        </Item>
        </Link>
       
        <Item>
            <ExploreIcon />
            Explore
        </Item>
        <Item>
            
            <SubscriptionsIcon />
            Subscriptions
        </Item>
        <Hr />
        <Item>
            <VideoLibraryIcon />
            Library
        </Item>
        <Item>
            <HistoryIcon />
            History
        </Item>
        <Login>
        Sign-in to Like Videos, Comment, and Subscribe.
        <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
            </Login>
        <Hr />
        <Title>BEST OF VANCED</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>

        </Wrapper>
    </Container>
   
  )
}

export default Menu