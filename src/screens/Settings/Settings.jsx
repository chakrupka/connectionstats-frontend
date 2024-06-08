import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";

const Settings = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <div style={{ width: "99dvw", height: "95dvh", marginTop: "4dvh" }}>
      <Link to={"/"} className="backButton">
        Home
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "8%",
          width: "84%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-10dvh",
          fontSize: "4dvh",
          textAlign: "center",
        }}
      >
        <div style={{ width: "50dvh" }}>
          <div>🚧 Under Construction 🚧</div>
          <div style={{ fontSize: "3dvh", marginBottom: "3dvh" }}>
            More options coming soon. If you forgot your password, contact Cha.
          </div>
          <div
            onClick={handleLogOut}
            className="loginButton"
            style={{
              marginLeft: "12.5dvh",
              width: "22dvh",
              paddingTop: "1dvh",
              paddingRight: "1dvh",
            }}
          >
            👋 Log Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
