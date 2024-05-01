import "./Home.css";
import PropTypes from "prop-types";

const Home = ({ setPage }) => {
  const handleClick = (page) => {
    setPage(page);
  };

  return (
    <div className="home">
      <div className="homeTitle">Connections Stats</div>
      <div className="homeSubtitles">
        <div onClick={() => handleClick(1)}>Add Your Game</div>
        <div onClick={() => handleClick(2)}>{"Today's Leaderboard"}</div>
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

Home.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Home;
