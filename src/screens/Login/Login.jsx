import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../services/game_service.js";
import { Link } from "react-router-dom";
import { login } from "../../services/login_service.js";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState(null);
  const [errCount, setErrCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      navigate("/home");
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await login({ username, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      setToken(user.token);
      setUsername("");
      setPassword("");
      navigate("/home");
    } catch (err) {
      setErrMessage("Incorrect credentials");
      setPassword("");
      setErrCount(errCount + 1);
    }
  };

  return (
    <div style={{ marginTop: "4dvh", height: "90dvh" }}>
      <Link to={"/home"} className="backButton">
        Home
      </Link>
      <form onSubmit={handleLogin}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "4.5dvh",
            justifyContent: "center",
          }}
        >
          <div style={{ marginTop: "15dvh", marginBottom: "1.5dvh" }}>
            Username
          </div>
          <input
            type="text"
            autoCapitalize="off"
            spellCheck="false"
            required
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
            className="loginInput"
          />
          <div style={{ marginTop: "3dvh", marginBottom: "1.5dvh" }}>
            Password
          </div>
          <input
            type="text"
            autoCapitalize="off"
            spellCheck="false"
            required
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
            className="loginInput"
          />
          <button type="submit" className="loginButton">
            Log in
          </button>
          {errMessage !== null && (
            <div className="errorMessage">{errMessage}</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
