import React, {Component} from 'react';
import { Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';

import NavBar from './components/navBar';
import Cards from './components/cards';
import SearchBox from './components/searchBox';
import PokemonPage from './components/pokemonPage';
import UserID from './components/dataTutorial';
import SideBar from './components/sideBar';

import Team from './redux/team';


class App extends Component{
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col xs={2} className="sidebar">
              <SideBar />
            </Col>
            <Col xs={10}>
              <SearchBox />
              <Routes>
                <Route path="/" element={<Cards />} />
                <Route path="/user" element={<UserID />} />
                <Route path="/pokemon/:pokemonId" element={<PokemonPage />} />
                <Route path="/team" element={<Team />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}


export default App;
