import style from "./ModalEditar.module.css";

const ModalEditar = () => {
    return (
        <section className={style.modaleditar}>
            <div>EDITAR CARD:</div>
            <form>
                <div><div><label htmlFor="titulo">Titulo</label></div><input type="text" id="titulo" placeholder="algo" required /></div>
                <div><div><label htmlFor="categoria">Categoria</label></div><select name="categoria" id="categoria" required>
                    <option value=""></option>
                    <option value="FRONTEND">FRONTEND</option>
                    <option value="BACKEND">BACKEND</option>
                    <option value="INOVACION Y GESTION">INOVACION Y GESTION</option>
                </select></div>
                <div><div><label htmlFor="imagen">Imagen</label></div><input type="text" id="imagen" placeholder="algo" required /></div>
                <div><div><label htmlFor="video">Video</label></div><input type="text" id="video" placeholder="algo" required /></div>
                <div><div><label htmlFor="descripcion">Descripcion</label></div><textarea name="descripcion" id="descripcion">algo</textarea></div>
                <div className={style.botones}><button className={style.guardar}>GUARDAR</button><button className={style.limpiar}>LIMPIAR</button></div>
            </form>
        </section>
    )
}

export default ModalEditar;