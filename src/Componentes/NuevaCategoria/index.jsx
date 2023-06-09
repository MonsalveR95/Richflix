import "./NuevaCategoria.css"
import Campo from "../Campo"
import Boton from "../Boton"
import { useEffect, useState } from "react"
import TextArea from "../TextArea"
import ListaVideos from "../ListaVideos"

const NuevaCategoria = (props) => {

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")
    const [codigo, actualizarCodigo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [id_categoria, actualizarId] = useState("")

    const [is_edit, setIsEdit] = useState(false)
    const [listadoCategoria, actualizarListadoCategorias] = useState(props.datos)
   
    const { crearCategoria, eliminarCategoria } = props
    

    const manejarNuevaCategoria = (e) => {
        e.preventDefault()
        let datos = {
            titulo,
            color,
            codigo,
            descripcion
        }

        if (is_edit) {
            // Actualizamos categoria
            const cat_actualizadas = props.datos.map(cat => {
                if (cat.id === id_categoria) {
                    return {
                        ...cat,
                        ...datos
                    }
                }
                return cat
            })

            actualizarListadoCategorias(cat_actualizadas)
            setIsEdit(false)
            limpiar()

            localStorage.removeItem('categorias')
            localStorage.setItem('categorias', JSON.stringify(cat_actualizadas))
            return
        }

        crearCategoria(datos)
        limpiar()
    }

    const handleEdit = (id_categoria) => {
        setIsEdit(true)
        const categoria = props.datos.find(categoria => categoria.id === id_categoria)
        actualizarTitulo(categoria.titulo)
        actualizarCodigo(categoria.codigo)
        actualizarDescripcion(categoria.descripcion)
        actualizarColor(categoria.color)
        actualizarId(id_categoria)        
    }

    const limpiar = () => {
        actualizarCodigo("")
        actualizarDescripcion("")
        actualizarTitulo("")
        actualizarColor("")
        actualizarId("")
    }

    useEffect(() => {
        actualizarListadoCategorias(props.datos)
    }, [props.datos])

    return <section className="nueva-cat">
        <form onSubmit={manejarNuevaCategoria}>
            <h1>Nueva Categoría</h1>
            <Campo
                titulo="Nombre"
                placeholder="Ingrese Nombre"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <TextArea
                titulo="Descripción"
                placeholder="Agrege una descripción"
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar color"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Campo
                titulo="Código seguridad"
                placeholder="Agrege el código de seguridad"
                required
                valor={codigo}
                actualizarValor={actualizarCodigo}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <Boton type_button="submit">
                        Guardar
                    </Boton>
                    <Boton type="secondary" onClick={() => limpiar()}>
                        Limpiar
                    </Boton>
                </div>
                {is_edit && <Boton type="secondary" onClick={() => setIsEdit(false)}>
                    Cancelar
                </Boton>}
            </div>
            <ListaVideos
                listadoCategoria={listadoCategoria}
                eliminarCategoria={eliminarCategoria}
                id={props.datos}
                handleEdit={handleEdit}
            />
        </form>
    </section>
}

export default NuevaCategoria
