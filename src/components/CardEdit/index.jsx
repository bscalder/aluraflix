import style from "./CardEdit.module.css";

const CardEdit = (props) => {

    const {color, cambiaModal} = props;
    
    const elborde = `15px solid ${color}`;

    const borde = {
        border: elborde,
    }
    return (
        <section className={style.cardedit} style={borde}>
            <div className={style.textoboton}><img src="img/Borrar.png" alt="" />BORRAR</div>
            <div className={style.textoboton} onClick={cambiaModal}><img src="img/Editar.png" alt="" />EDITAR</div>
        </section>
    )
}

export default CardEdit;