import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import { generateRandom } from "../../utils";  





function Castles() {
const [rooms, setRooms] = useState(generateRandom)
const location = useLocation();


    return (
      <div>
        <h2>Rooms</h2>
        <span>Click a room to enter:</span> <br />
        {!rooms.length ? <h2>No rooms left</h2> : rooms.map((room, index) => {
            return (
                <Link to={`${location.pathname}/${room}`} state={room}>
                <p style={{color: room}}>{room}</p>
                </Link>
            )
        })}
      </div>
    );
  }
  
  export default Castles;
  