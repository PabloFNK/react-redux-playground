import React from 'react';
import styled from 'styled-components';

import Empty from './Empty';
import ChatWindow from '../containers/ChatWindow';

const StyledMain = styled.main`
  flex: 1 1 0;
  background-color: rgba(25, 25, 27, 1);
  height: 100%;
`;

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />
    } else {
      return <ChatWindow activeUserId={activeUserId} />
    }
  }
  return <StyledMain>{renderMainContent()}</StyledMain>;
};

export default Main;
