import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setActiveUserId } from '../actions';

const StyledUser = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const StyledUserPic = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const StyledUserDetails = styled.div`
  display: none;
  /* not small devices  */
  @media (min-width: 576px) {
    display: block;
    padding: 0 0 0 1rem;
  }
`;

const StyledUserDetailsName = styled.p`
  @media (max-width: 768px) {
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
  }
`;

const User = ({ user, setActiveUserId }) => {
  const { name, profile_pic, status } = user;

  const handleUserClick = () => {
    setActiveUserId(user.user_id);
  }

  return (
    <StyledUser onClick={handleUserClick}>
      <StyledUserPic src={profile_pic} alt={name} className="User__pic" />
      <StyledUserDetails>
        <StyledUserDetailsName>{name}</StyledUserDetailsName>
        <p>{status}</p>
      </StyledUserDetails>
    </StyledUser>
  )
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

const mapDispatchToProps = {
  setActiveUserId
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
