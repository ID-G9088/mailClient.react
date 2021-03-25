import React from "react";

class Button extends React.Component {
  render() {
    const { style, text, onClick } = this.props;

    return (
      <button onClick={onClick} style={style}>
        {text}
      </button>
    );
  }
}

export default Button;
