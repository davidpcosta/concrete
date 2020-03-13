import React from 'react';
import './UserDetails.css';
import Loading from '../components/Loading'
import { connect } from 'react-redux';

const UserDetails = ({ user, isFetching }) => {
  return (
    <div className="UserDetails">
      {!isFetching.user ? 
      <ul>
        <li className="avatar"> <img src={ user.avatar_url } alt="Avatar" /></li>
        
        {user.name ? 
        <li className="name"><span>{ user.name }</span></li>
        : null}

        <li className="username"><span>{ user.login }</span></li>

        {user.company ? 
        <li className="organization">
          <i className="ic ic-organization"></i>
          <span>{ user.company }</span>
        </li>
        : null}

        {user.location ?
        <li className="location">
          <i className="ic ic-location"></i>
          <span>{ user.location }</span>
        </li>
        : null}

        {user.starredCount ? 
        <li className="stars">
          <i className="ic ic-stars"></i>
          <span>{ user.starredCount }</span>
        </li>
        : null}

        <li className="repositories">
          <i className="ic ic-repositories"></i>
          <span>{ user.public_repos }</span>
        </li>

        <li className="followers">
          <i className="ic ic-followers"></i>
          <span>{ user.followers }</span>
        </li>
      </ul>
      :
      <Loading text="Loading user data..." />
      }
    </div>
  );
}


const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.isFetching
  }
};

export default connect(mapStateToProps)(UserDetails);