import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import { Container, Row } from "react-bootstrap";
import MainContent from "./components/MainContent";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <SearchBar />
          <MainContent />
        </Row>
      </Container>
      <MusicPlayer />
    </>
  );
}

export default App;
