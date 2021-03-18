import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'
import './Overlay.scss'

class Modal extends React.Component {


    render () {


const {text,header,actions,className, onClick,closeButton}=this.props;



        return (
         <div className='overlay' onClick={onClick}>
         <div  className={className} >
            <h2>{header}</h2>
            <p>{text}</p>
            <div>{actions()}</div>
            {closeButton && <button className="closeButton">X</button>}
        </div>
    </div>

    )
    }
}

export default Modal;
