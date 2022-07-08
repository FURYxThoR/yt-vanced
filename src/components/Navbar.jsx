import React from 'react'
import styled from "styled-components"
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";


const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bg};
  height: 56px;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 100%;
padding: 0px 20px;
position: relative;
`;

const Search = styled.div`
  width: 53%;
  position: absolute;
  left: 0px;
  right: 300px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 2.5px solid #909090;
  border-radius: 20px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px;
  background-color: transparent;
  border: 1.5px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 20px;
  font-weight: 500;
  margin-top: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = () => {
    return (
    <Container>
        <Wrapper>
            <Search>
                <Input placeholder="Search for Video"/>
            <ManageSearchIcon />
            </Search>
        <Button variant="outlined">
           <AccountCircleOutlinedIcon/> Sign-in
        </Button>
        </Wrapper>
    </Container>
      
    )
  }

export default Navbar