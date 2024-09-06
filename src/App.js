import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import { Container, Row } from "react-bootstrap";
import MainContent from "./components/MainContent";
import MusicPlayer from "./components/MusicPlayer";
import SearchContent from "./components/searchContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <SearchBar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/result" element={<SearchContent />} />
          </Routes>
        </Row>
      </Container>
      <MusicPlayer />
    </BrowserRouter>
  );
}

export default App;
