import style from "./Category.module.css";

const Category = (props) => {

    const {category, bgColor} = props;
    const sectionStyle = {
        backgroundColor: bgColor
    }
    return (
        <section className={style.category} style={sectionStyle}>
            {category}
        </section>
    )
}

export default Category;