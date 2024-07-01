import Podium from "./Podium";
import RankedList from "./RankedList";

const Yesterday = ({ topYesterday }) => {
  return (
    <div>
      <Podium top={topYesterday} />
      <div className="lb-line-wrapper">
        <div className="lb-line" />
      </div>
      {topYesterday.length > 0 ? (
        <RankedList top={topYesterday} scoreHeader={"Score"} />
      ) : (
        <div className="no-games">No games were submitted yesterday 😢</div>
      )}
    </div>
  );
};
export default Yesterday;
