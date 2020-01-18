import React from "react";
import { connect } from 'react-redux';

import { setTypingValue, sendMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ typing, activeUserId, value, setTypingValue, sendMessage }) => {
  const handleChange = e => {
    setTypingValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage(typing, activeUserId);
  }

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
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
