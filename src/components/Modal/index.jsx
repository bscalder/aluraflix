import style from "./Modal.module.css";

const Modal = () => {
    return (
        <section className={style.modal}>
            <img src="/img/equis.png" alt="Cerrar" className={style.cierra} />
        </section>
    )
}

export default Modal;