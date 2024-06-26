import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./Stats.css";
import dateUtils from "../../utils/date_utils.js";
import { Link } from "react-router-dom";
import NoStats from "./NoStats.jsx";
import formatGame from "../../utils/format_game.js";
import Banner from "../../components/Banner.jsx";

const Stats = () => {
  const games = useSelector((state) => state.userGames);
  const stats = useSelector((state) => state.userStats);
  const [tab, setTab] = useState("games");

  const scoreEmoji = (score) => {
    if (score === 30) return "💎";
    if (30 > score && score > 25) return "❤️‍🔥";
    if (25 >= score && score >= 20) return "💖";
    if (20 > score && score >= 10) return "💗";
    if (10 > score) return "❤️‍🩹";
  };

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
        {formatGame.getColorArray(game)}
        <div className="gameBoxStat">{dateUtils.prettyStrDate(game.date)}</div>
        <div className="gameBoxStat">
          {game.score ? `Score: ${game.score} ${scoreEmoji(game.score)}` : "💔"}
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
    if (stats.prevStreak || stats.currentStreak) {
      return stats.currentStreak ? stats.currentStreak : stats.prevStreak;
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
    <div>
      <Banner />
      <div className="statsMain">
        <div className="tabBar">
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
