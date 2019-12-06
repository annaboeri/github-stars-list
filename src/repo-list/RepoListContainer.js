import React, { Component } from 'react';
import RepoCard from './RepoCard';

class RepoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      repos: [],
    };
    this.fetchRepos = this.fetchRepos.bind(this);
  }

  componentDidMount() {
    this.fetchRepos();
  }

  fetchRepos() {
    const query = "q=stars:>1000&sort=stars&per_page=100";
    const apiUrl = `https://api.github.com/search/repositories?${query}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('api call result:', result)
          this.setState({
            isLoaded: true,
            repos: result.items
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
    const { error, isLoaded, repos } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section className="repo-list-container">
          <ul>
            {repos.map(repo =>
              <RepoCard repo={repo} key={repo.id} />
            )}
          </ul>
        </section>
      );
    }
  }
}

export default RepoListContainer;
