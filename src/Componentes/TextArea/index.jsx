import "./TextArea.css"

const TextArea = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="areatexto">
        <label>{props.titulo}</label>
        <textarea placeholder={props.placeholder} value={props.valor} onChange={manejarCambio}></textarea>
    </div>
}

export default TextArea