import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Castles from "./pages/Castles";
import Room from "./pages/Room";
import Door from "./pages/Door";
import Monster from "./pages/Monster";
import "./styles.css";



export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Alex' Amazing Adventure Game</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/castles" element={<Castles />} />
        <Route path="/castles/:id" element={<Room />} />
        <Route path="/castles/:id/:id" element={<Door />} />
        <Route path="/castles/:id/:id/:id/" element={<Monster />} />
        
      </Routes>
    </div>
  );
}
