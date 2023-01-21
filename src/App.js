import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navBar';
import Card from './components/card';
class App extends Component{



  render() {
    return (
      <React.Fragment>
        <h1>test</h1>
        <NavBar />
        <Card />
      </React.Fragment>
    );
  }
}

export default App;
