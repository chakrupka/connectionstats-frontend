import { prepGame } from "../../utils/formatGame.js";
import { sendGame } from "../../services/services.js";
import "./SubmitGame.css";
import { useState } from "react";
import PropTypes from "prop-types";

const SubmitGame = ({ setPage }) => {
  const [newGame, setNewGame] = useState("");
  const [newName, setNewName] = useState("");
  const [results, setResults] = useState(null);
  const [next, setNext] = useState(false);
  const placeholder = `Instructions:
  1. Open NYTimes Games
  2. Go to Connections
  3. "View Results"
  4. "Share Your Results"
  5. If on mobile, find the "Copy" option
  6. Return & "Paste Game"
  7. Accept prompts`;

  const handleGameChange = (event) => {
    setNewGame(event.target.value);
    console.log(newGame);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    console.log(newGame);
  };

  const goNext = (event) => {
    event.preventDefault();
    // add test
    setNext(true);
  };

  const submitGame = (event) => {
    event.preventDefault();
    console.log(newGame);
    const preGame = prepGame(newGame);
    preGame.user = newName.replaceAll(" ", "");
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
    <div className="mainSubmit">
      <div className="backButton" onClick={() => setPage(0)}>
        Home
      </div>
      <div className="inputSection">
        {!results ? (
          !next ? (
            <form onSubmit={goNext} className="gameForm">
              <button
                type="button"
                className="submitButton"
                onClick={() => pasteClipboardContent()}
              >
                Paste Game
              </button>
              <textarea
                value={newGame}
                onChange={handleGameChange}
                className="gameInput"
                id="paste-target"
                placeholder={placeholder}
              />
              <button type="submit" className="submitButton">
                Next
              </button>
            </form>
          ) : (
            <div className="enterNameContainer">
              <div style={{ fontSize: 37, marginTop: "10dvh" }}>
                Enter a name:
              </div>
              <form onSubmit={submitGame} className="nameForm">
                <input
                  className="nameInput"
                  value={newName}
                  onChange={handleNameChange}
                ></input>
                <button type="submit" className="submitButton">
                  Submit
                </button>
              </form>
            </div>
          )
        ) : (
          <div className="results">
            <div>Completed: {results.score ? "Yes" : "No"}</div>
            <div>Number of guesses: {results.tries}</div>
            <div>Score: {results.score ? results.score : "0"}</div>
            <div className="checkLeaderboard" onClick={() => setPage(2)}>
              Check Leaderboard
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

SubmitGame.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default SubmitGame;
