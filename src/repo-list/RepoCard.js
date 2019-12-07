import React, { useState } from 'react';
import CommitListContainer from './commit-list/CommitListContainer';
import './RepoListContainer.css';

const RepoCard = props => {
  const [showCommitList, setShowCommitList] = useState(false);
  const { repo } = props;

  return (
    <li className={`flip-card ${showCommitList ? 'flip' : ''}`}>
      <div className="card-content">
        <div className={`flip-card-front ${showCommitList ? 'hide' : ''}`}>
          <h3>{repo.name}</h3>
          <p className="ellipsis">{repo.description}</p>
          <a href={repo.html_url} className="repo-link">
            <i className="fab fa-github"></i>
            View Repo
          </a>
          <p>
            <i className="fas fa-star"></i>{repo.stargazers_count.toLocaleString()}
            <i className="fas fa-code-branch"></i>{repo.forks_count.toLocaleString()}
          </p>
          <button
            className="view-commits-btn"
            onClick={(prevState) => setShowCommitList(!showCommitList)}
          >
            View Recent Commmits
          </button>
        </div>
        <div className="flip-card-back">
          <button
            className="back-btn"
            onClick={(prevState) => setShowCommitList(!showCommitList)}
          >
            <i className="fas fa-arrow-left"></i> Back
          </button>
            { showCommitList && (
              <CommitListContainer
                repoName={repo.full_name}
                handleErrors={props.handleErrors}
              />
            )}
        </div>
      </div>
    </li>
  )
}

export default RepoCard;
