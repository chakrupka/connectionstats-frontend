import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import createUser from "../../services/newuser_service.js";
import "../Login/Login.css";
import login from "../../services/login_service.js";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../reducers/user_reducer.js";
import { loadUserStats } from "../../utils/redux_loaders.js";
import { loadUserGames } from "../../utils/redux_loaders.js";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errMessage, setErrMessage] = useState(null);
  const [errCount, setErrCount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  const handleBlur = () => {
    if (name.trim() !== "") {
      setName(name.charAt(0).toUpperCase() + name.slice(1));
    }
  };

  const handleCreateUser = async (event) => {
    event.preventDefault();
    try {
      await createUser({ username, password, name });
      const user = await login({ username, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      dispatch(loginUser(user));
      loadUserStats(user.token, dispatch);
      loadUserGames(user.token, dispatch);
      navigate("/home");
    } catch (err) {
      if (err.response.data && err.response.data.error.includes("username")) {
        setErrMessage("Username already exists");
      } else {
        setErrMessage("Error with credentials");
      }
      setErrCount(errCount + 1);
    }
  };

  return (
    <div style={{ marginTop: "4dvh", height: "90dvh" }}>
      <Link to={"/home"} className="backButton">
        Back
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
          <div style={{ marginTop: "3dvh", marginBottom: "1dvh" }}>
            Username
          </div>
          <input
            type="text"
            autoCapitalize="off"
            autoComplete="on"
            spellCheck="false"
            required
            value={username}
            name="username"
            minLength={3}
            onChange={({ target }) => setUsername(target.value)}
            className="loginInput"
          />
          <div className="infoText">
            Periods and underscores are allowed. Must not begin or end with a
            period. This will be <span style={{ color: "black" }}>public</span>.
          </div>
          <div style={{ marginTop: "3dvh", marginBottom: "1dvh" }}>Name</div>
          <input
            type="text"
            spellCheck="false"
            autoCapitalize="on"
            autoComplete="on"
            required
            value={name}
            onBlur={handleBlur}
            name="given-name"
            minLength={2}
            onChange={({ target }) => setName(target.value)}
            className="loginInput"
          />
          <div className="infoText">
            Names with spaces or special characters will not be accepted. This
            will be <span style={{ color: "black" }}>private</span>.
          </div>
          <div style={{ marginTop: "3dvh", marginBottom: "1dvh" }}>
            Password
          </div>
          <input
            type="password"
            autoCapitalize="off"
            autoComplete="on"
            spellCheck="false"
            required
            value={password}
            name="password"
            minLength={6}
            maxLength={21}
            onChange={({ target }) => setPassword(target.value)}
            className="loginInput"
          />
          <div className="infoText">
            Password may be any combination of letters, numbers, and symbols.
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
