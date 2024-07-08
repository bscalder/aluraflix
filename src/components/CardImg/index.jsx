import style from "./CardImg.module.css";

const CardImg = (props) => {

    const {color} = props;

    const sombratxt = `0px 0px 17px 8px ${color}`;

    const sombra = {
        boxShadow: sombratxt,
    }

    return (
        <section className={style.cardimg}>
            <img src="/img/cardejemplo.jpg" alt="Card" style={sombra} />
        </section>
    )
}

export default CardImg;