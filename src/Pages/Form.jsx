import {v4 as uuid} from 'uuid'
import { useEffect, useState } from 'react';
import Formulario from '../Componentes/Formulario';

const Form = () => {

    const[videos, actualizarVideos] = useState([])
    const [categorias, actualizarCategorias] = useState([])

      const registrarVideo = (video) => {
        actualizarVideos([...videos, {...video, id: uuid()}])
        localStorage.removeItem('videos')
        localStorage.setItem('videos', JSON.stringify([...videos, {...video, id: uuid()}]))       
      }

      useEffect(() => {
        const categorias_from_local = JSON.parse(localStorage.getItem('categorias') || '[]')
        const videos_from_local = JSON.parse(localStorage.getItem('videos') || '')
        actualizarVideos(videos_from_local)
        actualizarCategorias(categorias_from_local)
      }, [])
      

    return(
        <main>
        <Formulario 
          categorias ={categorias.map((categoria => categoria.titulo))}
          registrarVideo={registrarVideo}
        />
        </main>
    )
}
export default Form