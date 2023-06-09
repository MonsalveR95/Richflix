import "./Boton.css"

const Boton = (props) => {
    const { type = 'primary', type_button = 'button', onClick } = props
    
    return <button type={type_button ?? 'button'} onClick={onClick} className={`boton ${type}`}>{props.children}</button>
}

export default Boton