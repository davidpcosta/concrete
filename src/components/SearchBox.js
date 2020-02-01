import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component {

  state = {
    searchText: this.props.searchText
  }

  handleTextChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/" + this.state.searchText);
  }

  render = () => {
    return (
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <input className="searchBox" type="text" value={ this.state.searchText } onChange={ this.handleTextChange } />
            <button className="searchButton" type="submit">
              <i className="ic-search"></i>
            </button>
          </div>
        </form>
    );
  }
}

export default SearchBox;