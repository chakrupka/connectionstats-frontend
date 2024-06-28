import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
const NoStats = () => {
  return (
    <div style={{ width: "99dvw", height: "95dvh", marginTop: "4dvh" }}>
      <Banner />
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
        <div style={{ width: "43dvh" }}>
          <div style={{ fontSize: "10dvh" }}>🙈</div>
          <div style={{ fontSize: "4dvh" }}>
            You might be new! Come back after submitting a few games to see some
            detailed statistics.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoStats;
