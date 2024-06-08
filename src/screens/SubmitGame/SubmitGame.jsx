import { prepGame } from "../../utils/formatGame.js";
import { sendGame, setToken } from "../../services/game_service.js";
import { login } from "../../services/login_service.js";
import "./SubmitGame.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubmitGame = () => {
  const [newGame, setNewGame] = useState("");
  const [newName, setNewName] = useState("");
  const [results, setResults] = useState(null);
  const [next, setNext] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

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
    handleSendGame(preGame);
  };

  const handleSendGame = async (game) => {
    const res = await sendGame(game);
    if (res) {
      console.log("Game sent succesfully", res);
      setResults(res);
    } else {
      console.log("Failed to send game");
    }
  };

  const pasteClipboardContent = () => {
    navigator.clipboard.readText().then((text) => {
      setNewGame(text);
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await login({ username, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (err) {
      setErrMessage("Incorrect credentials");
      setTimeout(() => {
        setErrMessage(null);
      }, 3000);
    }
  };

  const submitForm = () => (
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
                type="text"
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
          <Link to={"/leaderboard"} className="checkLeaderboard">
            Check Leaderboard
          </Link>
        </div>
      )}
    </div>
  );

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          autocapitalize="off"
          required
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="text"
          required
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );

  return (
    <>
      {errMessage !== null && (
        <div style={{ width: "80dvw", height: "3dvh", background: "lightred" }}>
          {errMessage}
        </div>
      )}
      <div style={{ marginTop: "4dvh" }}>
        <Link to={"/"} className="backButton">
          Home
        </Link>
        {user === null ? (
          loginForm()
        ) : (
          <div>
            <p>Hello, {user.name}</p>
            {submitForm()}
          </div>
        )}
      </div>
    </>
  );
};

export default SubmitGame;
