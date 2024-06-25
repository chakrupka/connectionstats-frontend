import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./Stats.css";
import { ReactComponent as Green } from "./assets/green-corner.svg";
import { ReactComponent as Yellow } from "./assets/yellow-corner.svg";
import { ReactComponent as Blue } from "./assets/blue-corner.svg";
import { ReactComponent as Purple } from "./assets/purple-corner.svg";
import dateUtils from "../../utils/date_utils.js";
import { Link } from "react-router-dom";
import NoStats from "./NoStats.jsx";

/*
 * REVIEW OBSERVER CODE
 */

const Stats = () => {
  const games = useSelector((state) => state.userGames);
  const stats = useSelector((state) => state.stats);
  const [tab, setTab] = useState("games");

  const EmojifyRow = ({ row }) => (
    <div style={{ marginBottom: "-1.06dvh" }}>
      {row.split("").map((char, index) => {
        if (char === "y") {
          return <Yellow className="emoji" key={index} />;
        } else if (char === "g") {
          return <Green className="emoji" key={index} />;
        } else if (char === "b") {
          return <Blue className="emoji" key={index} />;
        } else {
          return <Purple className="emoji" key={index} />;
        }
      })}
    </div>
  );

  const GameViewBox = ({ game }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          });
        },
        {
          root: ref.current.parentNode,
          threshold: 1.0,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <div
        className="gameBox"
        ref={ref}
        style={{
          opacity: isVisible ? 1 : 0.2,
          // boxShadow:
          // game.score > 0 ? "0 0 10px lightgreen" : "0 0 10px lightcoral",
        }}
      >
        <div className="gameBoxNumber">#{game.number}</div>
        {game.sequence.map((row, index) => (
          <EmojifyRow row={row} key={index} />
        ))}
        <div className="gameBoxStat">{dateUtils.prettyStrDate(game.date)}</div>
        <div className="gameBoxStat">
          Score: {game.score ? game.score : "0"}
        </div>
      </div>
    );
  };

  const GameView = ({ games }) => {
    return (
      <div className="gameViewMain">
        <div className="gameBoxGhostStart"></div>
        {games.length > 0 &&
          games.map((game, index) => <GameViewBox game={game} key={index} />)}
        <div className="gameBoxGhostEnd">&nbsp;</div>
      </div>
    );
  };

  const getStreak = () => {
    if (stats.prevStreak > 0) {
      if (stats.currentStreak > 0) {
        return stats.currentStreak;
      }
      return stats.prevStreak;
    }
    return 0;
  };

  const StatTable = () => (
    <div className="statTable">
      <div>Current Streak: {getStreak()}</div>
      <div>Longest Streak: {stats.longestStreak}</div>
      <div>
        Solve Rate: {!isNaN(stats.solvePercent) ? stats.solvePercent : 0}%
      </div>
      <div>Attempts: {stats.totalGames}</div>
      <div>Solved: {stats.solvedGames}</div>
    </div>
  );

  if (stats.totalGames === 0) {
    return <NoStats />;
  }

  return (
    <div style={{ marginTop: "8dvh" }}>
      <Link to={"/home"} className="backButton">
        Home
      </Link>
      <div className="statsMain">
        <div className="tabBar">
          {" "}
          <div
            className={
              tab === "stats"
                ? "statSectionTitle"
                : "statSectionTitle selectedTab"
            }
            onClick={() => setTab("games")}
          >
            Previous Games
          </div>
          <div
            className={
              tab === "games"
                ? "statSectionTitle"
                : "statSectionTitle selectedTab"
            }
            onClick={() => setTab("stats")}
          >
            General Stats
          </div>
        </div>

        {tab === "games" && <GameView games={games} />}
        {tab === "stats" && <StatTable />}
        <div className="wipText">
          This page is a work in progress. More advanced statistics are on their
          way.
        </div>
      </div>
    </div>
  );
};

export default Stats;
