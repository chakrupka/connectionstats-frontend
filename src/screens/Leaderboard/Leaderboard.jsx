import Banner from "../../components/Banner.jsx";
import PageSelect from "./components/PageSelect.jsx";
import Today from "./components/Today.jsx";
import { ReactComponent as HelpIcon } from "../../assets/helpicon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./Leaderboard.css";
import {
  loadTodayGames,
  loadTopStats,
  loadYesterdayGames,
} from "../../utils/redux_loaders.js";
import Yesterday from "./components/Yesterday.jsx";
import AllTime from "./components/AllTime.jsx";
import HelpPopup from "./components/HelpPopup.jsx";

const Leaderboard = () => {
  const [view, setView] = useState("today");
  const [helpPopup, setHelpPopup] = useState(false);
  const topGames = useSelector((state) => state.topGames);
  const topStats = useSelector((state) => state.topStats);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!topGames.topToday) {
      loadTodayGames(dispatch);
    }
    if (!topGames.topYesterday) {
      loadYesterdayGames(dispatch);
    }
    if (!topStats.byNumSubmitted) {
      loadTopStats(dispatch);
    }
  }, []);

  const views = {
    today: <Today topToday={topGames.topToday} />,
    yesterday: <Yesterday topYesterday={topGames.topYesterday} />,
    allTime: <AllTime topStats={topStats} />,
  };

  return (
    <div>
      {user ? <Banner /> : <div className="banner-replacement"></div>}
      {helpPopup && <HelpPopup setHelpPopup={setHelpPopup} />}
      <div className="lb-title">Leaderboard</div>
      <div className="lb-help" onClick={() => setHelpPopup(true)}>
        <HelpIcon />
      </div>
      <PageSelect view={view} setView={setView} />
      {topGames.topToday && topStats.byNumSubmitted && views[view]}
    </div>
  );
};

export default Leaderboard;
