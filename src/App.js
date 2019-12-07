import React from 'react';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import RepoListContainer from './repo-list/RepoListContainer.js';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <RepoListContainer />
      <Footer />
    </div>
  );
}

export default App;
