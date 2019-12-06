import React from 'react';

const Commit = props => {
  const { commit } = props.commit;
  const commitDate = new Date(commit.author.date).toLocaleString();

  return (
    <div className="commit">
      <a href={props.commit.html_url}><p><i class="fas fa-history"></i> {commit.message}</p></a>
      <p>{commitDate} - {commit.author.name}</p>
    </div>
  );
}

export default Commit;
