import React from 'react';
import './MainSearch.css';


class MainSearch extends React.Component {

  state = {
    searchText: 'asdfads',
    isSearching: false
  }

  handleSearckClick = (e) => {
    console.log(e.target);
    if (!this.state.isSearching) {
      this.search(this.state.searchText);
    } else {
      console.log('Searching in progress');
    }
  }

  search = (searchText) => {
    alert(searchText);
  }

  render = () => {
    return (
      <div className="MainSearch">
        <h1 className="title">Github<span>Search</span></h1>
        <div>
          <input className="searchBox" type="text"  />
          <button className="searchButton" onClick={this.handleSearckClick}>
            <i className="ic ic-search"></i>
            <span>Search</span>
          </button>
        </div>
      </div>
    );
  }
}

export default MainSearch;