import React, {Component} from 'react';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/navBar';
import Cards from './components/cards';
import SearchBox from './components/searchBox';
import PokemonPage from './components/pokemonPage';
import UserID from './components/dataTutorial';

class App extends Component{



  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SearchBox />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/user" element={<UserID />} />
          <Route path="/pokemon/:pokemonId" element={<PokemonPage />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
