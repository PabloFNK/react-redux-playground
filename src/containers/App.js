import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { values } from 'lodash-es';

const StyledApp = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  color: rgba(189, 189, 192, 1);
`;

const App = ({ contacts, user, activeUserId }) => {
  return (
    <StyledApp>
      <Sidebar contacts={values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </StyledApp>
  );
};

const mapStateToProps = (state) => {
  const { contacts, user, activeUserId } = state;
  return {
    contacts,
    user,
    activeUserId
  }
}

export default connect(
  mapStateToProps
)(App);
