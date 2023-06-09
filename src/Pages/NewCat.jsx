import {v4 as uuid} from 'uuid'
import { useEffect, useState } from 'react';
import NuevaCategoria from '../Componentes/NuevaCategoria';


const NewCat = () => {

    
    const [categorias, actualizarCategorias] = useState([])
    //Crear Categoria
    const crearCategoria = (nuevaCategoria) => {
        actualizarCategorias([...categorias, {...nuevaCategoria, id: uuid()}])
        localStorage.removeItem('categorias')
        localStorage.setItem('categorias', JSON.stringify([...categorias, {...nuevaCategoria, id: uuid()}]))
    }

    //Eliminar Categoria 
    const eliminarCategoria = (id) => {
        const categoria = categorias.find(cat => cat.id === id)
    const renovarCategoria = categorias.filter((categoria) => categoria.id !== id)
        actualizarCategorias(renovarCategoria)
        localStorage.removeItem('categorias')
        localStorage.setItem('categorias', JSON.stringify(renovarCategoria))
        const videos = JSON.parse(localStorage.getItem('videos'))
        const renovarVideos = videos.filter(video => video.categoria !== categoria.titulo)
        localStorage.removeItem('videos')
        localStorage.setItem('videos', JSON.stringify(renovarVideos))
    }

    useEffect(() => {
        const newCategories = JSON.parse(localStorage.getItem('categorias') || '[]')
        actualizarCategorias(newCategories)
    }, [])

    return (
        <NuevaCategoria
            crearCategoria={crearCategoria}
            datos={categorias}
            eliminarCategoria={eliminarCategoria}        
        />            
    )
}

export default NewCat