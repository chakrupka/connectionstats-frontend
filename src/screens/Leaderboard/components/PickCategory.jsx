const PickCategory = ({ setCategory }) => {
  return (
    <div className="pick-category">
      <div className="pick-category-text">Category:</div>
      <div className="pick-category-menu">
        <select
          name="All Time"
          onChange={(event) => setCategory(event.target.value)}
          defaultValue="byNumSubmitted"
        >
          <option value="byNumSubmitted">Games Submitted</option>
          <option value="byNumSolved">Games Solved</option>
          <option value="byNumPerfect">Perfect Games</option>
          <option value="bySolveRate">Solve Rate</option>
          <option value="byAvgScore">Average Score</option>
          <option value="byLongStreak">Longest Streak</option>
        </select>
      </div>
    </div>
  );
};

export default PickCategory;
