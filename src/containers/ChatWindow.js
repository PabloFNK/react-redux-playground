import React from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from "../components/Header";
import Chats from '../components/Chats';
import MessageInput from '../containers/MessageInput';

import { values } from 'lodash-es';

const StyledChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const ChatWindow = ({ activeUserId, contacts, messages, typing }) => {
  const activeUser = contacts[activeUserId];
  const activeMsgs = messages[activeUserId];

  return (
    <StyledChatWindow>
      <Header user={activeUser} />
      <Chats messages={values(activeMsgs)} />
      <MessageInput value={typing} />
    </StyledChatWindow>
  );
};

const mapStateToProps = (state, ownProps) => ({
  contacts: state.contacts,
  messages: state.messages,
  typing: state.typing,
  ...ownProps
});

export default connect(mapStateToProps)(ChatWindow);
