import React from 'react';
import UserDetails from './UserDetails';
import RepoDetails from './RepoDetails';
import './Detail.css';

class Detail extends React.Component {
  render = () => {
    const {user, repos} = this.props;
    return (
      <div className="Detail">
        <UserDetails user={user} />
        <RepoDetails repos={repos} />
      </div>
    );
  }
}

export default Detail;