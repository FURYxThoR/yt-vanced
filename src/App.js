import './App.css';
import styled, { ThemeProvider } from "styled-components"
import Menu from "./components/Menu.jsx"
import Navbar from "./components/Navbar.jsx"
import {darkTheme} from "./utils/Theme.js"
import {lightTheme} from "./utils/Theme.js"
import { useState } from 'react';
import Home from './pages/Home';
import Video from './pages/Video';
import SignIn from "./pages/SignIn";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Home from '@mui/icons-material/Home';

const Container = styled.div`
display: flex;
`;
const Main = styled.div`
flex: 7;
background-color: ${({ theme }) => theme.bg};
`; 
const Wrapper = styled.div` 
padding: 22px 96px;
`;



function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container className="App">
      <BrowserRouter>      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/">
              <Route path="/" element={<Home />} />
              {/* <Route path="signin" element={<SignIn />} /> */}
              <Route path="video"/>
              <Route path=":id" element={<Video/>} />
            </Route>
          </Routes>
        </Wrapper>
        </Main>     
      </BrowserRouter>

    </Container>
    </ThemeProvider>
  );
}

export default App;
