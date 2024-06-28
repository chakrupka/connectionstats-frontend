import { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [hovering, setHovering] = useState(false);

  const handleHover = () => {
    setHovering(true);
  };

  const handleLeave = () => {
    setHovering(false);
  };

  return (
    <>
      <div
        className={hovering ? "banner open" : "banner"}
        onMouseOver={handleHover}
        onMouseOut={handleLeave}
      >
        <div className="bannerText">
          {/* <span className="bannerText homeIcon">🟪🟦🟩🟨</span> */}
          Connections Stats
        </div>
        <div className={`bannerMenu ${hovering ? "active" : "inactive"}`}>
          <Link to="/settings" className="bannerMenuItem">
            User Settings
          </Link>
          <Link to="/submit" className="bannerMenuItem">
            Submit Game
          </Link>
          <Link to="/stats" className="bannerMenuItem">
            Statistics
          </Link>
          <Link to="/leaderboard" className="bannerMenuItem">
            Leaderboard
          </Link>
          <Link to="/home" className="bannerMenuItem">
            Home
          </Link>
        </div>
      </div>
      <div className={`overlay ${hovering ? "active" : ""}`}></div>
      <div style={{ marginBottom: "10dvw" }}>&nbsp;</div>
    </>
  );
};

export default Banner;
