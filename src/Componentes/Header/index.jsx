import "./Header.css"
import { Link,  useLocation } from "react-router-dom"


const Header = () => {
    
    const location = useLocation()    
    
    return <header className="header">

        {location.pathname === '/' ? <img src="/img/Logo1.png" alt="AluraFlix" /> : <Link to='/'><img src="/img/Logo1.png" alt="AluraFlix" /></Link>}
        
        { location.pathname === '/form' ?  null : <Link to="/form" className="boton-video"> Nuevo Video </Link>}
    </header>
}

export default Header