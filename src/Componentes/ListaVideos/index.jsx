import "./ListaVideos.css"
import Boton from "../Boton"


const ListaVideos = (props) =>{ 
    
    
    const {eliminarCategoria, listadoCategoria, handleEdit} = props
    
    return <table className="lista-categorias">
        <thead className="encabezados">
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Editar</th>
                <th>Remover</th>
            </tr>
        </thead>
        <tbody className="ultimo">
            {listadoCategoria.map((listado, index) => {
                return <tr className="lista-contenido" key={index}>
                    <td>
                        {listado.titulo}
                    </td>
                    <td>
                        {listado.descripcion}
                    </td>
                    <td>
                        <Boton className="btn-editar" onClick={() => handleEdit(listado.id)}>
                            Editar
                        </Boton >
                    </td>
                    <td>
                        <Boton  className="btn-eliminar"  onClick={() => eliminarCategoria(listado.id)}>
                            Remover
                        </Boton >
                    </td>
                </tr>
            })}
        </tbody>
    </table>
}

export default ListaVideos