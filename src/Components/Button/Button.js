import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {


    render () {
        const {style,text,onClick}=this.props;
        return (
            <button onClick={onClick} style={{backgroundColor : style.backgroundColor, padding:style.padding, marginRight:'20px', borderRadius:'5px'}}>
            {this.props.text}
            </button>

        )
    }
}

export default Button;
