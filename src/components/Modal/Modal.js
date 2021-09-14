import React from "react";
import "./Modal.scss";
import "./Overlay.scss";
import Button from "../Button/Button.js";
import propTypes from "prop-types";

const Modal = (props) => {
  const { text, header, actions, className, onClick, closeButton } = props;

  return (
    <div>
      <div className="overlay" onClick={onClick}></div>
      <div className={className}>
        <h2>{header}</h2>
        <p>{text}</p>
        <div>
          {actions.ok()}
          {actions.cancel()}
        </div>
        {closeButton && <Button className="closeButton" text="X" onClick={onClick}></Button>}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  text: "default text",
  header: "default header",
};

Modal.propTypes = {
  text: propTypes.string,
  header: propTypes.string,
  actions: propTypes.object,
  className: propTypes.string,
  onClick: propTypes.func,
  closeButton: propTypes.bool.isRequired,
};

export default Modal;
