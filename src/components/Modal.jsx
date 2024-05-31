import { useNavigate } from "react-router-dom"; //Use to navigate the action not the link
import classes from "./Modal.module.css";

function Modal({ children, onClose }) {
  //Object Destructuring
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
