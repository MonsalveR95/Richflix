import "./ListaCategorias.css"

const ListaCategorias = (props) =>{

    const manejarCambio= (e) =>{
        props.actualizarCategoria(e.target.value)
    }

    return <div className="lista-categorias">
        <label> Categorias </label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden> Escoja categoria </option>
            {props.categorias.map((categoria, index) =>{
                return <option key={index} value={categoria}>{categoria}</option>
            })}
        </select>
    </div>
}

export default ListaCategorias