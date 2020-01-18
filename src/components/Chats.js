import React, { Component } from "react";
import styled from 'styled-components';

const StyledChats = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
  margin: 0 auto;
  overflow-y: scroll;
`;

const StyledChat = styled.span`
  margin: 1rem 0;
  color: #fff;
  padding: 1rem;
  background: ${props => props.is_user_msg ? '#2b2c33' : 'linear-gradient(90deg, #1986d8, #7b9cc2)'};
  max-width: 90%;
  border-top-right-radius: ${props => props.is_user_msg ? '0' : '10px'};
  border-bottom-right-radius: ${props => props.is_user_msg ? '0' : '10px'};
  border-top-left-radius: ${props => props.is_user_msg ? '10px' : '0'};
  border-bottom-left-radius: ${props => props.is_user_msg ? '10px' : '0'};
  margin-left: ${props => props.is_user_msg ? 'auto' : '0'};;

  @media (min-width: 576px) {
    max-width: 60%;
  }
`;

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <StyledChat is_user_msg={is_user_msg}>{text}</StyledChat>
  );
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  render() {
    return (
      <StyledChats ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </StyledChats>
    );
  }
}

export default Chats;
