import style from "./Card.module.css";
import Category from "../Category";
import CardIn from "../CardIn";

const Card = (props) => {

    const {category, bgColor} = props;
    return(
        <section className={style.card}>
            <Category category = {category} bgColor = {bgColor}/>
            <CardIn color = {bgColor}/>
        </section>
    )
}

export default Card;