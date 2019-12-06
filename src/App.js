import React from 'react';
import Header from './header/Header.js';
import RepoListContainer from './repo-list/RepoListContainer.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <RepoListContainer />
    </div>
  );
}

export default App;
