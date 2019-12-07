import React, { Component } from 'react';
import RepoCard from './RepoCard';
import './RepoListContainer.css';

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

  handleErrors(response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    } else return response.json();
  }

  fetchRepos() {
    const query = "q=stars:>1000&sort=stars&per_page=100";
    const apiUrl = `https://api.github.com/search/repositories?${query}`;
    fetch(apiUrl)
      .then(this.handleErrors)
      .then((result) => {
          this.setState({
            isLoaded: true,
            repos: result.items
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
    const { error, isLoaded, repos } = this.state;

    if (error) {
      return (
         <section className="error-container">
           <div className="fa-6x">
             <i class="far fa-frown"></i>
           </div>
           <p>Unable to load repo list</p>
          </section>
       )
    }
    else if (!isLoaded) {
      return (
        <section className="loading-container">
          <div className="fa-3x">
            <i className="fas fa-spinner fa-pulse"></i>
          </div>
          <p>Loading...</p>
        </section>
      )
    } else {
      return (
        <section className="repo-list-container">
          <ul className="cards">
            {repos.map(repo =>
              <RepoCard
                key={repo.id}
                repo={repo}
                handleErrors={this.handleErrors}
              />
            )}
          </ul>
        </section>
      );
    }
  }
}

export default RepoListContainer;
