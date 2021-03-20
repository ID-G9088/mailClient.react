import React from "react";
import "./Modal.scss";
import "./Overlay.scss";
import Button from "../Button/Button.js";
import propTypes from "prop-types";

class Modal extends React.Component {
    render() {
        const { text, header, actions, className, onClick, closeButton } = this.props;

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
    }
}

export default Modal;

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
