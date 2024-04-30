import formatGame from "./utils/formatGame.js";
import sendGame from "./services/services.js";
import { useState } from "react";

const App = () => {
  const [newGame, setNewGame] = useState("");
  const [results, setResults] = useState(null);

  const handleGameChange = (event) => {
    setNewGame(event.target.value);
    console.log(newGame);
  };

  const submitGame = (event) => {
    event.preventDefault();
    console.log(newGame);
    const preGame = formatGame(newGame);
    handleSendGame(preGame);
  };

  const handleSendGame = async (game) => {
    const res = await sendGame(game);
    if (res) {
      console.log("Game sent succesfully", res);
      setResults(res.data);
    } else {
      console.log("Failed to send game");
    }
  };

  const pasteClipboardContent = () => {
    navigator.clipboard.readText().then((text) => {
      setNewGame(text);
    });
  };

  return (
    <div className="input">
      <form onSubmit={submitGame} className="gameForm">
        <button
          type="button"
          className="submitButton"
          onClick={() => pasteClipboardContent()}
        >
          Paste
        </button>
        <textarea
          value={newGame}
          onChange={handleGameChange}
          className="gameInput"
          id="paste-target"
        />
        <button type="submit" className="submitButton">
          Check score
        </button>
      </form>
      {results && (
        <div className="results">
          <p>Completed: {results.score ? "Yes" : "No"}</p>
          <p>Number of guesses: {results.tries}</p>
          <p>Score: {results.score ? results.score : "0"}</p>
        </div>
      )}
    </div>
  );
};
export default App;
