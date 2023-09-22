import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = () => {
    return <div className={classes.backdrop}/>;
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

export default function Modal({children}) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
}