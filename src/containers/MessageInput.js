import React from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setTypingValue, sendMessage } from "../actions";

const StyledMessageForm = styled.form`
  width: 80%;
  margin: 1rem auto;
`;

const StyledMessageInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border: 0;
  border-radius: 10px;
  font-size: 1rem;
  outline: 0;
`

const MessageInput = ({ typing, activeUserId, value, setTypingValue, sendMessage }) => {
  const handleChange = e => {
    setTypingValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage(typing, activeUserId);
  }

  return (
    <StyledMessageForm onSubmit={handleSubmit}>
      <StyledMessageInput
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </StyledMessageForm>
  );
};

const mapStateToProps = (state, ownProps) => ({
  typing: state.typing,
  activeUserId: state.activeUserId,
  value: ownProps.value
});

const mapDispatchToProps = {
  setTypingValue,
  sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
