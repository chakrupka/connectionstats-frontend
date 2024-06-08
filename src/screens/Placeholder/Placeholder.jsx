import { Link } from "react-router-dom";
const Placeholder = () => {
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
          <div style={{ fontSize: "3dvh" }}>
            Don't worry! Any games you submit are saved to your account, and
            will be integrated automatically when this page is completed. Check
            back for updates!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
