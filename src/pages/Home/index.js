import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <span>Click to enter the world of ...</span> <br />
      <Link to="/castles">
      <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
      />
      </Link>
    </div>
  );
}

export default Home;
