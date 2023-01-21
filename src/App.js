import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navBar';
import Cards from './components/cards';
class App extends Component{



  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Cards />
      </React.Fragment>
    );
  }
}

export default App;
