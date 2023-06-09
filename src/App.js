import './App.css';
import "./Componentes/assets/css/body.css"
import Header from './Componentes/Header';
import Footer from './Componentes/Footer'


import Home from './Pages/Home';
import Form from './Pages/Form';
import NewCat from './Pages/NewCat';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { DEFAULT_VIDEOS } from './constants/videos';
import { DEFAULT_CATEGORIAS } from './constants/categorias';


function App() {

  useEffect(() => {
    const exists = localStorage.getItem('videos')
    if (!exists) {
      localStorage.setItem('videos', JSON.stringify(DEFAULT_VIDEOS))
    }
  }, [])

  useEffect(() => {
    const existe = localStorage.getItem('categorias')
    if (!existe) {
      localStorage.setItem('categorias', JSON.stringify(DEFAULT_CATEGORIAS))
    }
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/newcat' element={<NewCat />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
