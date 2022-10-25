import React from "react";
import Header from "./components/Header";
import GamePage from "./components/GamePage";
import GameAbout from "./components/GameAbout"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GameContact from "./components/GameContact";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element= {<GamePage/>}/>
          <Route path="/about" element= {<GameAbout/>}/>
          <Route path= "/contact" element= {<GameContact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;