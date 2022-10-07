import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";



function Castles() {
const [castles, setCastles] = useState(['red', 'green', 'blue'],)


console.log(castles)


    return (
      <div>
        <h2>Castles</h2>
        <span>Click a castle to enter:</span> <br />
        {!castles.length ? <h2>No castles left</h2> : castles.map((castle, index) => {
            return (
                <Link to={`/castles/${castle}`} state={castle}>
                <p>{castle}</p>
                </Link>
            )
        })}
      </div>
    );
  }
  
  export default Castles;
  