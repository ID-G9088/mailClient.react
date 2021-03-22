import React, { Component } from "react";
import { star } from "../../themes/Icons/star";

export default class Icon extends Component {
  render() {
    const { color, onClick, filled } = this.props;

    return <span onClick={onClick}>{star(color, filled)}</span>;
  }
}
