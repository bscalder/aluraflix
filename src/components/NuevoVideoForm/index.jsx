import style from "./NuevoVideoForm.module.css";

const NuevoVideoForm = () => {
    return (
        <section className={style.nuevovideoform}>
            <div><label htmlFor="titulo">Titulo</label><input type="text" id="titulo" name="titulo" placeholder="ingrese el titulo" required className={style.texto} />
            <label htmlFor="categoria">Categoria</label><select name="categoria" id="categoria" required className={style.selector}>
                    <option value=""></option>
                    <option value="FRONT END">FRONT END</option>
                    <option value="BACK END">BACK END</option>
                    <option value="INOVACION Y GESTION">INOVACION Y GESTION</option>
                </select></div>
            <div><label htmlFor="imagen">Imagen</label><input type="text" name="imagen" id="imagen" placeholder="el enlace es obligatorio" required className={style.texto} />
            <label htmlFor="video">Video</label><input type="text" name="video" id="video" placeholder="ingrese el enlace del video" required className={style.texto} /></div>
            <label htmlFor="descripcion">Descripcion</label><textarea name="descripcion" id="descripcion" required className={style.areatexto}>¿de que se trata el video?</textarea>
            <div className={style.areabotones}><button name="guardar" className={style.boton}>GUARDAR</button><button name="limpiar" className={style.boton}>LIMPIAR</button></div>
        </section>
    )
}

export default NuevoVideoForm;