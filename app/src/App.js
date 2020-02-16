import React from "react";
import logo from "./logo.svg";

import * as Styled from "./styles";
import "./App.css";

function App() {
  return (
    <Styled.Container>
      <Styled.Header bgc="#FF4500">
        <img src={logo} className="App-logo" alt="logo" />
        <Styled.Text>
          Edit <code>src/App.js</code> and save to reload.
        </Styled.Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Styled.Header>
    </Styled.Container>
  );
}

export default App;
