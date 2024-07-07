import styles from "./Banner.module.css"

const Banner = () => {
    return (
        <section className={styles.banner}>
            <section className={styles.card}>
                <section className={styles.wrapper}>
                    <section className={styles.TitleCategory}>
                        FRONT END
                    </section>
                    <section className={styles.TitleVideo}>
                        Challenge React
                    </section>
                    <section className={styles.DescVideo}>
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                    </section>
                </section>
                <img src="/img/player.png" alt="player" className={styles.player} />
            </section>
        </section>
    )
}

export default Banner;