import styles from "./Header.module.css"

const Header = () => {
    return (
        <section className={styles.encabezado}>
            <img src="img/Logo.png" alt="AluraFlix" className={styles.logo_header} />
            <section className={styles.hughug}>
                <button className={styles.boton1}>Home</button>
                <button className={styles.boton2}>Nuevo Video</button>
            </section>
        </section>
    )
}

export default Header