import React, { Component } from 'react';
import Commit from './Commit';

class CommitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      commits: [],
    };
    this.fetchCommits = this.fetchCommits.bind(this);
  }

  componentDidMount() {
    this.fetchCommits();
  }

  fetchCommits(repoName) {
    const yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000)).toISOString();
    const query = `since=${yesterday}`
    const apiUrl = `https://api.github.com/repos/${this.props.repoName}/commits?${query}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            commits: result
            });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, commits } = this.state;

    console.log('commits', commits)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section className="commit-list-container">
        {this.state.isLoaded && commits.length === 0 ? (
          <p>No recent commits</p>
        ) : (
          <ul>
            {commits.map(commit =>
              <Commit commit={commit} key={commit.sha} />
            )}
          </ul>
        )}
        </section>
      );
    }
  }
}

export default CommitList;
