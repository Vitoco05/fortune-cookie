import './App.css'
import FortuneCookies from './components/FortuneCookies'
import phrases from './data/phrases.json'

import { useState } from 'react'

function App() {

 /***** Funciones *****/
  const [index, setIndex] = useState(0)
  const backgrounds = ["url(./fortuna-1/fondo1.jpg)","url(./fortuna-1/fondo2.jpg)", "url(./fortuna-1/fondo3.jpg)", "url(./fortuna-1/fondo4.jpg)","url(./fortuna-1/fondo1.jpg)","url(./fortuna-1/fondo2.jpg)", "url(./fortuna-1/fondo3.jpg)", "url(./fortuna-1/fondo4.jpg)","url(./fortuna-1/fondo1.jpg)","url(./fortuna-1/fondo2.jpg)", "url(./fortuna-1/fondo3.jpg)", "url(./fortuna-1/fondo4.jpg)","url(./fortuna-1/fondo1.jpg)","url(./fortuna-1/fondo2.jpg)", "url(./fortuna-1/fondo3.jpg)"]
  const phrasesChanger = () => {
    const aleatorio = Math.floor(Math.random(index) * 15)

    if(aleatorio <= phrases.length){
      setIndex(aleatorio)
    }
  }

  document.body.style = `background-image: ${backgrounds[index]}`


  /*****Aplicación*****/
  return (
    <>
      <FortuneCookies 
      data={ phrases[ index ] }/>
      <button onClick={phrasesChanger}>ver otro</button>
    </>
  )
}

export default App
