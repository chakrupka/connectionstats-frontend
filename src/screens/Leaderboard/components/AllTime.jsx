import { useState } from "react";
import PickCategory from "./PickCategory";
import Podium from "./Podium";
import RankedList from "./RankedList";
import { HEADER_DICT } from "../config/constants";

const AllTime = ({ topStats }) => {
  const [category, setCategory] = useState("byNumSubmitted");

  return (
    <div>
      <PickCategory setCategory={setCategory} />
      <Podium top={topStats[category]} />
      <div className="lb-line-wrapper">
        <div className="lb-line" />
      </div>
      <RankedList
        top={topStats[category]}
        scoreHeader={HEADER_DICT[category]}
      />
    </div>
  );
};

export default AllTime;
