import React from "react";
import logo from "./logo.svg";

import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import * as Styled from "./styles";
import { ThemeProvider } from "styled-components";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Styled.Container>
        <Styled.Header area="biologia">
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
    </ThemeProvider>
  );
}

export default App;
