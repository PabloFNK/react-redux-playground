import React from "react";
import Header from "../components/Header";
import Chats from '../components/Chats';
import MessageInput from '../containers/MessageInput';

import { connect } from 'react-redux';

import './ChatWindow.css';

import { values } from 'lodash-es';

const ChatWindow = ({ activeUserId, contacts, messages, typing }) => {
  const activeUser = contacts[activeUserId];
  const activeMsgs = messages[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  contacts: state.contacts,
  messages: state.messages,
  typing: state.typing,
  ...ownProps
});

export default connect(mapStateToProps)(ChatWindow);
