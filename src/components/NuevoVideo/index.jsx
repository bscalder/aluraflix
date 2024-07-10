import style from "./NuevoVideo.module.css"
import NuevoVideoForm from "../NuevoVideoForm";

const NuevoVideo = () => {
    return (
        <section className={style.nuevovideo}>
        <div className={style.titulo1}>NUEVO VIDEO</div>
        <div className={style.titulo2}>Complete el formulario para crear una nueva tarjeta de video</div>
        <NuevoVideoForm />
        </section>
    )
}

export default NuevoVideo;