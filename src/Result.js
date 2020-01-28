import React from 'react';
import Detail from './Detail';
import NotFound from './NotFound';
import './Result.css';

function Result() {
  return (
    <div className="Result">
      <header>
        <h1 className="title">Github<span>Search</span></h1>
        <div className="searchContainer">
          <input className="searchBox" type="text" />
          <button className="searchButton">
            <i className="ic ic-search">&nbsp;</i>
        </button>
        </div>
      </header>
      <Detail />
      <NotFound isVisible={false} />
    </div>
  );
}

export default Result;
