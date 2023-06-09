import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaCategorias from "../ListaCategorias"
import TextArea from "../TextArea"
import Boton from "../Boton"

import { Link } from "react-router-dom"


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [video, actualizarVideo] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const[codigo, actualizarCodigo] = useState("")
    const[descripcion, actualizarDescripcion] = useState("")

    const{registrarVideo} = props
   
    const manejarEnvio = ( e ) =>{
        e.preventDefault()
        
        let datosAEnviar = {
            nombre,
            video,
            imagen,
            categoria,
            codigo,
            descripcion
        }
        registrarVideo(datosAEnviar)      
        clear()  
    }

    const clear = () => {
        actualizarCategoria("")
        actualizarCodigo("")
        actualizarDescripcion("")
        actualizarImagen("")
        actualizarNombre("")
        actualizarVideo("")
    }
    

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h1>
                Nuevo video
            </h1>
            <Campo 
                titulo = "Titulo"
                placeholder= "Ingrese Titulo"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo= "Imagen" 
                placeholder= "Ingrese URL de la imagen" 
                required
                valor={imagen}
                actualizarValor={actualizarImagen}
            />
            <Campo 
                titulo="Video" 
                placeholder=" Ingrese Link del Video" 
                required
                valor={video}
                actualizarValor={actualizarVideo}
            />
            <ListaCategorias 
                valor={categoria}
                required 
                actualizarCategoria={actualizarCategoria} 
                categorias={props.categorias}
            />
            <TextArea 
                titulo="Descripción" 
                placeholder="Agrege una descripción"
                valor={descripcion}                
                actualizarValor={actualizarDescripcion}
            />
            <Campo 
                titulo = "Código seguridad" 
                placeholder="Agrege el código de seguridad"
                required
                valor={codigo}
                actualizarValor={actualizarCodigo}
            />
            <div className="contenedor-btns">
                <div>
                    <Boton type_button="submit">
                        Guardar
                    </Boton>
                    <Boton type="secondary" onClick={() => clear()}>
                        Limpiar
                    </Boton>
                </div>                
                <Link to={"/newcat"}>
                    <Boton >
                    Nueva Categoria
                    </Boton>
                </Link>
            </div>            
        </form>
    </section>
}

export default Formulario