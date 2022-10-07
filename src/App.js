import { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Castles from "./pages/Castles";
import Room from "./pages/Room";
import Door from "./pages/Door";
import Monster from "./pages/Monster";
import "./styles.css";



export default function App() {
  const [treasureCount, setTreasureCount] = useState(0)
  const [highscore, setHighscore] = useState(0)
  const [lives, setLives] = useState(9)
  // const navigate = useNavigate();


  return (
    <div className="App">
      <header>
        <h1>Alex' Amazing Adventure Game</h1>
        <nav>
          <ul>
            <li onClick={() => {setTreasureCount(0); setLives(9)}}>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <p>Current amount of treasure: {treasureCount}</p>
        <p>Highscore: {highscore}</p>
        <p>Lives left: {lives}</p>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/castles" element={<Castles />} />
        <Route path="/castles/:id" element={<Room />} />
        <Route path="/castles/:id/:id" element={<Door />} />
        <Route path="/castles/:id/:id/:id/" element={<Monster setTreasureCount={setTreasureCount} treasureCount={treasureCount} highscore={highscore} setHighscore={setHighscore} lives={lives} setLives={setLives}/>} />
        
      </Routes>
    </div>
  );
}
