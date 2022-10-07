import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";




function Door() {
const [doors, setDoors] = useState(['Black', 'Orange', 'Purple'],)
const location = useLocation();

console.log(location)


console.log(doors)


    return (
      <div>
        <h2>Doors</h2>
        <span>Click a door to enter:</span> <br />
        {!doors.length ? <h2>No doors left</h2> : doors.map((door, index) => {
            return (
                <Link to={`${location.pathname}/${door}/`} state={door}>
                <p>{door}</p>
                </Link>
            )
        })}
      </div>
    );
  }
  
  export default Door;
  