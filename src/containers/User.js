import React from 'react';
import { connect } from 'react-redux';
import './User.css';
import { setActiveUserId } from '../actions';

const User = ({ user, setActiveUserId }) => {
  const { name, profile_pic, status } = user;

  const handleUserClick = () => {
    setActiveUserId(user.user_id);
  }

  return (
    <div className="User" onClick={handleUserClick}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

const mapDispatchToProps = {
  setActiveUserId
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
