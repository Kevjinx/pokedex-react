import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navBar';
import Cards from './components/cards';
import SearchBox from './components/searchBox';
import PokemonPage from './components/pokemonPage';
class App extends Component{



  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SearchBox />
        <Cards />
        <PokemonPage />
      </React.Fragment>
    );
  }
}

export default App;
