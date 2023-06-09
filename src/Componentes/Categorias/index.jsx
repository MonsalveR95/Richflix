import "./Categorias.css"
import Videos from "../Videos"

const Categorias = (props) =>{

    const {color, titulo} = props.datos
    const estiloTitulo = {backgroundColor: color, borderColor: color}
    const {videos} = props
    
    return <>
        {
            videos.length > 0 &&
            <section className="categoria">
            <h1 style={estiloTitulo}>{titulo}</h1>
            <div className="videos">
                {
                    videos.map((video, index) => <Videos 
                        datos={video}
                        key={index}
                        color={color}/>)
                }
            </div>

        </section>
        }
    </>
}

export default Categorias