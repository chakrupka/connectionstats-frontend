import { useSelector } from "react-redux";

const RankedList = ({ top, scoreHeader }) => {
  const user = useSelector((state) => state.user);

  return (
    <div className="ranked-list">
      <table className="ranked-list-table">
        {top && top[0] && (
          <tbody>
            <tr>
              <th className="ranked-list-table-header rank">Rank</th>
              <th className="ranked-list-table-header username">Username</th>
              <th className="ranked-list-table-header">{scoreHeader}</th>
            </tr>
            {top.map((item, index) => (
              <tr
                className="ranked-list-table-row"
                key={index}
                style={{
                  color:
                    user && item.user.username === user.username
                      ? "purple"
                      : "black",
                }}
              >
                <td className="ranked-list-table-col rank">{index + 1}.</td>
                <td className="ranked-list-table-col name">
                  {item.user.username}
                </td>
                <td className="ranked-list-table-col score">
                  {item.score ? item.score : "⨉"}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default RankedList;
