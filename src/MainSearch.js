import React from 'react';
import './MainSearch.css';

function MainSearch() {
  return (
    <div className="MainSearch">
      <h1 className="title">Github<span>Search</span></h1>
      <div>
        <input className="searchBox" type="text" />
        <button className="searchButton">
          <i className="ic ic-search"></i>
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}

export default MainSearch;
