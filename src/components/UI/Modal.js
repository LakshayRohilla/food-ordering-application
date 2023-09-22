import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = ({onClose}) => {
    return <div className={classes.backdrop} onClick={onClose}/>;
};

// const ModalOverlay = (props) => {
function ModalOverlay({children}) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

export default function Modal({children, onClose}) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
}