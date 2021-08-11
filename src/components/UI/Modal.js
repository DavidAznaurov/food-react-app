import React from 'react'
import { createPortal } from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = ({isOpen, setIsOpen}) => {
    return <div className={classes.backdrop} onClick={()=>setIsOpen(!isOpen)}/>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <>
        {createPortal(<Backdrop isOpen={props.isOpen} setIsOpen={props.setIsOpen}/>, portalElement)}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal
