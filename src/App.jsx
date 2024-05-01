import { useState } from "react";
import SubmitGame from "./screens/SubmitGame/SubmitGame";
import Home from "./screens/Home/Home";
import Leaderboard from "./screens/Leaderboard/Leaderboard";

const App = () => {
  const [page, setPage] = useState(0);

  const Screens = [
    {
      name: "home",
      component: <Home setPage={setPage} />,
    },
    {
      name: "submit",
      component: <SubmitGame setPage={setPage} />,
    },
    {
      name: "leaderboard",
      component: <Leaderboard setPage={setPage} />,
    },
  ];

  return <div>{Screens[page].component}</div>;
};

export default App;
