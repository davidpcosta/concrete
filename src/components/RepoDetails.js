import React from 'react';
import './RepoDetails.css';

const RepoDetails = ({ repos }) => {
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
      <ul>
        { repoList }
      </ul>

    </div>
  );
}

export default RepoDetails;
