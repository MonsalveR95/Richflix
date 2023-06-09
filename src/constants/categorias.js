import {v4 as uuid} from 'uuid'

export const DEFAULT_CATEGORIAS = [
    {
      titulo: "Matemáticas",
      color: "#6BD1FF",
      descripcion:"Acá podrás encontrar diferentes videos de difusión matemática y otros temas de ciencia",
      id: uuid(),
      codigo: "1"
    },
    {
      titulo: "Brawl Stars",
      color:"#9CD33B",
      descripcion: "Podrás ver varios tips para ser mejor jugador y divertirte",
      id: uuid(),
      codigo: "2"
    },
    {
      titulo: "Torre Oscura",
      color: "#00C86F",
      descripcion:"¿Te quiere sumergir en el mundo de Roland y su amigos? Los siguientes videos te darán una guía de donde comenzar",
      id: uuid(),
      codigo: "3"
    },
    {
      titulo: "Programación",
      color: "#FF8C2A",
      descripcion:"Te presentamos una guía para dar tus primeros pasos",
      id: uuid(),
      codigo: "4"
    }
  ]