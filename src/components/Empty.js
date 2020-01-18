import React from "react";
import styled from 'styled-components';

const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledEmptyName = styled.h1`
  color: #fff;
`;

const StyledEmptyStatus = styled.p`
  padding: 1rem;
  color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`;

const StyledEmptyInfo = styled.p`
  padding: 1rem;
`;

const StyledEmptyImage = styled.img`
  border-radius: 50%;
  margin: 2rem 0;
`;

const StyledEmptyButton = styled.button`
  padding: 1rem;
  margin: 1rem 0;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 30px;
  outline: 0;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }
`

const Empty = ({ user }) => {
  const { name, profile_pic, status } = user;
  const first_name = name.split(" ")[0];

  return (
    <StyledEmpty>
      <StyledEmptyName>Welcome, {first_name} </StyledEmptyName>
      <StyledEmptyImage src={profile_pic} alt={name} />
      <StyledEmptyStatus>
        <b>Status:</b> {status}
      </StyledEmptyStatus>
      <StyledEmptyButton>Start a conversation</StyledEmptyButton>
      <StyledEmptyInfo>
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </StyledEmptyInfo>
    </StyledEmpty>
  );
};

export default Empty;
