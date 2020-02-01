import React from 'react';
import './Home.css';
import SearchBox from '../components/SearchBox';

class Home extends React.Component {
  render = () => {
    const { history } = this.props;
    return (
      <div className="MainSearch">
        <h1 className="title">Github<span>Search</span></h1>
        <SearchBox history={ history } searchText='' />
      </div>
    );
  }
}

export default Home;