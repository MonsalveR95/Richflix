import "./Campo.css"

const Campo = (props) => {

    const { type = "text" } = props
    
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)        
    }

    return <div className={`campo campo-${type}`}>
        <label> {props.titulo} </label>        
        <input 
            placeholder={props.placeholder} 
            required ={props.required}
            onChange={manejarCambio}
            value={props.valor}                                  
            type={type} 
        />
    </div>
}

export default Campo