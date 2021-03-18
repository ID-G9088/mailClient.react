import React from "react";

class Button extends React.Component {
    render() {
        const { style, text, onClick } = this.props;
        return (
            <button onClick={onClick} style={{ backgroundColor: style.backgroundColor, padding: style.padding, marginRight: style.marginRight, borderRadius: "5px" }}>
                {text}
            </button>
        );
    }
}

export default Button;
