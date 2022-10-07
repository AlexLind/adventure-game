import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";




function Castles() {
const [rooms, setRooms] = useState(['Yellow', 'Green', 'Brown'],)
const location = useLocation();

console.log(location)


console.log(rooms)


    return (
      <div>
        <h2>Rooms</h2>
        <span>Click a room to enter:</span> <br />
        {!rooms.length ? <h2>No rooms left</h2> : rooms.map((room, index) => {
            return (
                <Link to={`${location.pathname}/${room}`} state={room}>
                <p>{room}</p>
                </Link>
            )
        })}
      </div>
    );
  }
  
  export default Castles;
  