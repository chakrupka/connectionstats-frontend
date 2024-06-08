import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../services/game_service.js";
import { Link } from "react-router-dom";
import createUser from "../../services/newuser_service.js";
import "../Login/Login.css";
import login from "../../services/login_service.js";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errMessage, setErrMessage] = useState(null);
  const [errCount, setErrCount] = useState(0);
  const navigate = useNavigate();

  const handleCreateUser = async (event) => {
    event.preventDefault();
    try {
      const newUser = await createUser({ username, password, name });
      console.log(newUser);
      const user = await login({ username, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      setToken(user.token);
      setUsername("");
      setPassword("");
      setName("");
      navigate("/");
    } catch (err) {
      console.log();
      if (err.response.data.error.includes("username")) {
        setErrMessage(
          `Username already exists ${errCount > 0 ? `(${errCount})` : ""}`
        );
      } else {
        setErrMessage(
          `Incorrect credentials ${errCount > 0 ? `(${errCount})` : ""}`
        );
      }
      setErrCount(errCount + 1);
    }
  };

  return (
    <div style={{ marginTop: "4dvh", height: "90dvh" }}>
      <Link to={"/"} className="backButton">
        Home
      </Link>
      <form onSubmit={handleCreateUser}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "4.5dvh",
            justifyContent: "center",
          }}
        >
          <div style={{ marginTop: "3dvh", marginBottom: "1dvh" }}>Name</div>
          <input
            type="text"
            autoCapitalize="off"
            required
            value={name}
            name="Name"
            onChange={({ target }) => setName(target.value)}
            className="loginInput"
          />
          <div className="infoText">
            Name must be one word, at least 2 letters long. Names with spaces or
            special characters will not be accepted.{" "}
          </div>
          <div style={{ marginTop: "3dvh", marginBottom: "1dvh" }}>
            Username
          </div>
          <input
            type="text"
            autoCapitalize="off"
            required
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
            className="loginInput"
          />
          <div className="infoText">
            Username must be at least 3 characters long. Periods and underscores
            are allowed. Must not begin or end with a period.
          </div>
          <div style={{ marginTop: "3dvh", marginBottom: "1dvh" }}>
            Password
          </div>
          <input
            type="text"
            required
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
            className="loginInput"
            autoCapitalize="off"
          />
          <div className="infoText">
            Password must be between 6 and 20 characters long, and may be any
            combination of letters, numbers, and symbols.
          </div>
          <button type="submit" className="loginButton">
            Create
          </button>
          {errMessage !== null && (
            <div className="errorMessage">{errMessage}</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
