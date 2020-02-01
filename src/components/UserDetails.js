import React from 'react';
import './UserDetails.css';

const UserDetails = ({ user }) => {
  return (
    <div className="UserDetails">
      <ul>
        <li className="avatar"> <img src={ user.avatar_url } alt="Avatar" /></li>
        <li className="name"><span>{ user.name }</span></li>
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
    </div>
  );
}

export default UserDetails;
