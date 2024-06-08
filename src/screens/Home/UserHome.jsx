import getPuzzleNum from "../../utils/getPuzzleNum";

const UserHome = ({ user }) => {
  return (
    <div
      style={{
        height: "100dvh",
        width: "100dvw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>Connections Stats</div>
      <div>
        Created with ❤️ by <a href="https://linkedin.com/in/cha-krupka">Cha</a>
      </div>
      <div>Welcome!</div>
      <div>Today's Puzzle is #{getPuzzleNum()}</div>
      <div>
        Please <u>log in</u> or <u>create a new account</u> to access all
        features.
      </div>
      <div>
        <u>Score explanation</u> | <u>Codebase</u>
      </div>
    </div>
  );
};

export default UserHome;
