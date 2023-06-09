import "./Videos.css"

const Videos = (props) => {

    const{nombre, imagen} = props.datos
    const {color} = props
    const estiloImagen = {borderColor: color}
    
    
    return <div className="videos-lista">
        <div className="imagenes-video">
            <img style={estiloImagen} src={imagen} alt={nombre} />            
        </div>
        <div>
            <h1>{nombre}</h1>                        
        </div>

    </div> 
}

export default Videos