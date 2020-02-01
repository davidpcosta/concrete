import React from 'react';
import './NotFound.css';

class NotFound extends React.Component {
  render = () => {
    return (
      <div className="NotFound">
        <span>User not found :(</span>
      </div>
    );
  }
}

export default NotFound;