import React from 'react';
import Detail from '../components/Detail';
import NotFound from '../components/NotFound';
import './Result.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchUserData, fetchReposData } from '../store/actions';
import SearchBox from '../components/SearchBox';


class Result extends React.Component {

  componentDidMount = () => {

    // Handle page reaload
    if (!this.props.user.legth) {
      console.log('Page reloaded');
      this.fetchData(this.props.searchText);
    }

    // Handle back button
    this.props.history.listen((location, action) => {
      if (action === 'POP') {
        console.log('Back button pressed');
        this.fetchData(this.props.searchText);
      }
    });
  }

  fetchData = (searchText) => {
    this.props.fetchUserData(searchText);
    this.props.fetchReposData(searchText);
  }

  render = () => {
    const {user, repos, history, searchText} = this.props;
    return (
      <div className="Result">
        <header>
          <h1 className="title"><Link to="/">Github<span>Search</span></Link></h1>
          <SearchBox history={ history } searchText={ searchText } />
        </header>
        {user.login ? 
          <Detail user={ user } repos={ repos } />
        :
          <NotFound />
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    searchText: ownProps.match.params.login,
    user: state.user,
    repos: state.repos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (searchText) => {
      dispatch(fetchUserData(searchText));
    },
    fetchReposData: (searchText) => {
      dispatch(fetchReposData(searchText));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
