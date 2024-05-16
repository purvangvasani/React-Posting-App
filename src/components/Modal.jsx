import PropTypes from 'prop-types';
import classes from './Modal.module.css';

function Modal({children, onModalStateChange}) {
    return (
        <>
            <div className={classes.backdrop} onClick={onModalStateChange} />
            <dialog open className={classes.modal}>{children}</dialog>
        </>
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onModalStateChange: PropTypes.func.isRequired
};

export default Modal;