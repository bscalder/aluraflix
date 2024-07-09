import style from "./Modal.module.css";
import ModalEditar from "../ModalEditar";

const Modal = () => {
    return (
        <section className={style.modal}>
            <img src="/img/equis.png" alt="Cerrar" className={style.cierra} />
            <ModalEditar />
        </section>
    )
}

export default Modal;