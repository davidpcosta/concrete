import React from 'react';
import Detail from '../components/Detail';
import NotFound from '../components/NotFound';
import './Result.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchUserData, fetchReposData } from '../store/actions';
import SearchBox from '../components/SearchBox';


class Result extends React.Component {

  constructor(props) {
    super(props);
    props.fetchUserData(props.searchText);
    props.fetchRepoData(props.searchText);
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
          <NotFound isVisible={false} />
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
    fetchRepoData: (searchText) => {
      dispatch(fetchReposData(searchText));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
