import ReactDOM from 'react-dom';
import "./Modal.scss";
const Backdrop = ({onHide, backdropOpacity=".8" }) => {
    return (
        <div 
            className="backdrop" 
            onClick={onHide} 
            style={{backgroundColor: `rgba(0,0,0,${backdropOpacity})`}}
        ></div>)};

const ModalOverlay = (props) => (
    <div className="modal" style={props.style}>
            {props.children}
    </div>
);

const Modal = (props) => {
    return (  
        <>
            {ReactDOM.createPortal(<Backdrop 
                onHide={props.handleHideModal} 
                backdropOpacity={props.backdropOpacity}
            />, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay 
                className={props.className} 
                style={props.style}
                backdropOpacity={props.backdropOpacity}
                >
                    {props.children}
                </ModalOverlay>, document.getElementById('overlays'))}
        </>
    );
}
 
export default Modal;