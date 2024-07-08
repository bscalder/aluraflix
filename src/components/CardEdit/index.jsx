import style from "./CardEdit.module.css";

const CardEdit = (props) => {

    const {color} = props;
    
    const elborde = `15px solid ${color}`;

    const borde = {
        border: elborde,
    }
    return (
        <section className={style.cardedit} style={borde}>
            <div><img src="img/Borrar.png" alt="" /></div>
            <div><img src="img/Editar.png" alt="" /></div>
        </section>
    )
}

export default CardEdit;