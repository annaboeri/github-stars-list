import React, { Component } from 'react';
import Commit from './Commit';

class CommitListContainer extends Component {
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

  calcYesterdaysDate() {
    const today = new Date().getTime();
    const yesterday = new Date(today - (24 * 60 * 60 * 1000));
    return yesterday.toISOString();
  }

  fetchCommits() {
    const query = `since=${this.calcYesterdaysDate()}`
    const apiUrl = `https://api.github.com/repos/${this.props.repoName}/commits?${query}`;
    fetch(apiUrl)
      .then(this.props.handleErrors)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            commits: result
            });
        },
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
    const numberOfCommits = commits.length;

    if (error) {
      return (
         <section className="error-container">
           <div className="fa-2x">
             <i className="far fa-frown"></i>
           </div>
           <p>Unable to load commits</p>
          </section>
       )
    }
    else if (!isLoaded) {
      return (
        <section className="loading-container">
          <i className="fas fa-spinner fa-pulse"></i>
          <p>Loading...</p>
        </section>
      )
    } else {
      return (
        <div className="commit-list-container">
        {this.state.isLoaded && numberOfCommits < 1 ? (
          <div className="empty-commit-list">
            <h3>No commits in the last 24 hrs</h3>
          </div>
        ) : (
          <div>
            <h3>
              {`${numberOfCommits}${' '}
              commit${numberOfCommits > 1 ? 's' : ''} in the last 24 hrs`}
            </h3>
            <ul>
            {commits.map(commit =>
              <Commit commit={commit} key={commit.sha} />
            )}
            </ul>
          </div>
        )}
        </div>
      );
    }
  }
}

export default CommitListContainer;
