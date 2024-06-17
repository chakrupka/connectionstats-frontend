import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../../services/login_service.js";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../reducers/user_reducer.js";
import { loadUserGames, loadUserStats } from "../../utils/redux_loaders.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState(null);
  const [errCount, setErrCount] = useState(0);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await login({ username, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      dispatch(loginUser(user));
      loadUserStats(user.token, dispatch);
      loadUserGames(user.token, dispatch);
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
            name="username"
            autoComplete="on"
            minLength={3}
            onChange={({ target }) => setUsername(target.value)}
            className="loginInput"
          />
          <div style={{ marginTop: "3dvh", marginBottom: "1.5dvh" }}>
            Password
          </div>
          <input
            type="password"
            autoCapitalize="off"
            spellCheck="false"
            required
            value={password}
            name="password"
            minLength={6}
            autoComplete="on"
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
