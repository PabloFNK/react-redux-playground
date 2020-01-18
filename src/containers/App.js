import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { values } from 'lodash-es';

const App = ({ contacts, user, activeUserId }) => {
  return (
    <div className="App">
      <Sidebar contacts={values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
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
