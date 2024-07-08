import style from "./Cardin.module.css";
import CardImg from "../CardImg";
import CardEdit from "../CardEdit";


const CardIn = (props) => {

    const {color} = props;

    const borde = `5px solid ${color}`;
    const sombra = `0px 0px 17px 8px ${color}`;

    const estilo = {
        border: borde,
        boxShadow: sombra,
    }

    return (
        <section className={style.cardin} style={estilo}>
            <CardImg color={color}/>
            <CardEdit />
        </section>
    )
}

export default CardIn;