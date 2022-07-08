import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  text-align: left;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
  text-align: left;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://cdn-icons-png.flaticon.com/512/1543/1543271.png" />
      <Details>
        <Name>
          Purvesh Panchal <Date>1 day ago</Date>
        </Name>
        <Text>
        I think it looks pretty great. Google's last UI overhaul was Android 9, so it's been a while. I like this look and I think Google might be working towards a material design 3. Looks like Google seems to be looking at minimalism and less color.
        </Text>
        </Details>
    </Container>
  );
};


export default Comment;