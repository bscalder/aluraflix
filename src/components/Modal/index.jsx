import style from "./Modal.module.css";
import ModalEditar from "../ModalEditar";

const Modal = (props) => {
    const {cambiaModal} = props;
    return (
        <section className={style.modal}>
            <img src="/img/equis.png" alt="Cerrar" className={style.cierra} onClick={cambiaModal}/>
            <ModalEditar />
        </section>
    )
}

export default Modal;