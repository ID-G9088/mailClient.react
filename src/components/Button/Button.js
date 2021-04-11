import React from "react";

const Button = (props) => {
  const { style, text, onClick } = props;

  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
