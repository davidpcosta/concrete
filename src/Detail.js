import React from 'react';
import UserDetails from './UserDetails';
import RepoDetails from './RepoDetails';
import './Detail.css';

class Detail extends React.Component {
  render = () => {
    return (
      <div className="Detail">
        <UserDetails />
        <RepoDetails />
      </div>
    );
  }
}

export default Detail;