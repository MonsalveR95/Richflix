
import { useState, useEffect } from 'react';
import Categorias from '../Componentes/Categorias';


const Home = () => {

    const[videos, actualizarVideos] = useState([])
    const [categorias, actualizarCategorias] = useState([])

    useEffect(() => {
      const videos_from_local = JSON.parse(localStorage.getItem('videos') || '[]')
      actualizarVideos(videos_from_local)
    }, [])
  
    useEffect(() => {
      const categorias_from_local = JSON.parse(localStorage.getItem('categorias') || '[]')
      actualizarCategorias(categorias_from_local)
    }, [])
    
    return(
        <main>
            { categorias.map((categoria) => <Categorias 
          datos= {categoria}
          key= {categoria.titulo}
          videos={videos.filter(video => video.categoria === categoria.titulo)}

        />
        )         
      }
        </main>
    )
}

export default Home