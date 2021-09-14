import React from "react";
import { star } from "../../themes/Icons/star";

const Icon = (props) => {
  const { color, onClick, filled } = props;
  return <span onClick={onClick}>{star(color, filled)}</span>;
};

export default Icon;
