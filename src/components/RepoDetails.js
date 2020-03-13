import React from 'react';
import './RepoDetails.css';
import Loading from '../components/Loading'
import { connect } from 'react-redux';

const RepoDetails = ({ repos, isFetching }) => {
  const repoList = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).map(repo => {
    return (
      <li className="repo" key={ repo.id }>
        <h3 className="repoTitle">{ repo.name }</h3>
        <span className="repoDescription">{ repo.description }</span>
        <span className="repoStars"><i className="ic ic-stars"></i> {repo.stargazers_count }</span>
      </li>
    );
  });

  return (
    <div className="RepoDetails">
      {!isFetching.repos ? 
      <ul>
        { repoList }
      </ul>
      :
      <Loading text="Loading repos..." />
      }

    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.isFetching
  }
};

export default connect(mapStateToProps)(RepoDetails);