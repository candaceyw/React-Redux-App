import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar'
import SpaceX from './components/SpaceX';
import 'materialize-css/dist/css/materialize.min.css';


function App() {
  return (
    <div className='App'>
      <SearchBar />
      <SpaceX />
    </div>
  );
}

export default App;
