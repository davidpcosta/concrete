import React from 'react';
import './SearchBox.css';
import { connect } from 'react-redux';
import { fetchUserData, fetchReposData } from '../store/actions';

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
    this.props.fetchUserData(this.state.searchText);
    this.props.fetchReposData(this.state.searchText);
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (searchText) => {
      dispatch(fetchUserData(searchText));
    },
    fetchReposData: (searchText) => {
      dispatch(fetchReposData(searchText));
    }
  }
};

export default connect(null, mapDispatchToProps)(SearchBox);