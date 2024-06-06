import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeTitle">Connections Stats</div>
      <div className="homeSubtitles">
        <Link to={"submit"}>Add Your Game</Link>
        <Link to={"leaderboard"}>Today's Leaderboard</Link>
        <a href="https://www.nytimes.com/2024/02/19/us/how-i-designed-my-perfect-connections-solve.html#:~:text=Each%20color%20is%20appointed%20a,on%20a%20line%20earns%20nothing.&text=The%20total%20for%20each%20line,color%20by%20the%20line's%20multiplier.">
          <div>Score Explanation</div>
        </a>
        <a href="https://github.com/chakrupka/connectionstats-frontend">
          <div>Github</div>
        </a>
      </div>
    </div>
  );
};

export default Home;
