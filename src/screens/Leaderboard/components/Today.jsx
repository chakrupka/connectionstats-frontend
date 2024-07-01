import Podium from "./Podium";
import RankedList from "./RankedList";

const Today = ({ topToday }) => {
  return (
    <div>
      <Podium top={topToday} />
      <div className="lb-line-wrapper">
        <div className="lb-line" />
      </div>
      {topToday.length > 0 ? (
        <RankedList top={topToday} scoreHeader={"Score"} />
      ) : (
        <div className="no-games">Be the first to submit a game!</div>
      )}
    </div>
  );
};
export default Today;
