import TextScaler from "../../../components/TextScaler";

const Podium = ({ top }) => {
  return (
    <div className="podium">
      <div className="podium-section">
        <div className="podium-name">
          {top && top[1] ? (
            <TextScaler text={top[1].user.username} />
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
        <div className="podium-rank-text second">🥈</div>
      </div>
      <div className="podium-section">
        <div className="podium-name">
          {top && top[0] ? (
            <TextScaler text={top[0].user.username} />
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
        <div className="podium-rank-text first">🥇</div>
      </div>
      <div className="podium-section">
        <div className="podium-name">
          {top && top[2] ? (
            <TextScaler text={top[2].user.username} />
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
        <div className="podium-rank-text third">🥉</div>
      </div>
    </div>
  );
};

export default Podium;
