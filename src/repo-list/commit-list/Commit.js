import React from 'react';

const Commit = props => {
  const { commit } = props.commit;
  const commitDate = new Date(commit.author.date).toLocaleTimeString();

  return (
    <li className="commit">
      <a href={props.commit.html_url}>
        <p className="ellipsis commit-message">
          <span>{commit.message}</span>
        </p>
      </a>
      <p>
        <i className="far fa-clock"></i>{commitDate}
        <i className="fas fa-user-circle"></i>{commit.author.name}
      </p>
    </li>
  );
}

export default Commit;
