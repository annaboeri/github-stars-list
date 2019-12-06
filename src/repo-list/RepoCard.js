import React, { useState } from 'react';
import CommitList from './CommitList';

const RepoCard = props => {
  const [showCommitList, setShowCommitList] = useState(false);
  const { repo } = props;

  return (
    <li className="repo-card">
      <h2>{repo.name}</h2>
      <a href={repo.html_url}>{repo.html_url}</a>
      <p><i class="fas fa-star"></i>{repo.stargazers_count.toLocaleString()}</p>
      <button href="#" onClick={(prevState) => setShowCommitList(!showCommitList)}>View Recent Commmits</button>
      { showCommitList && <CommitList repoName={repo.full_name} /> }
    </li>
  )
}

export default RepoCard;
