import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './App.css';
import logo from './assets/logo.png'


import Routes from './routes';

function App() {
  return (
    <div>

      <Navbar   bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30%"
            height="30%"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></Navbar.Brand>
        <Nav>
          <Nav.Link style={{width:150}} href="#features"><b>Nosso objetivo</b></Nav.Link>
          <Nav.Link style={{width:150}} href="#pricing"><b>Faça parte</b></Nav.Link>
        </Nav>
 

      </Navbar>

      <Routes />
    </div>

  );
}

export default App;
