import React from 'react';
import UserDetails from './UserDetails';
import RepoDetails from './RepoDetails';
import './Detail.css';

function Detail() {
  return (
    <div className="Detail">
      <UserDetails />
      <RepoDetails />
    </div>
  );
}

export default Detail;
