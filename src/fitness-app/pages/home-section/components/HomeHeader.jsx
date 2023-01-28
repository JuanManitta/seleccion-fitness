import { useRef } from 'react';
import './homeHeader.css'




export const HomeHeader = ({headerRef, aEntrenarNavigate}) => {


  return (

    <header id="header" >
        <div className="header__div-text" ref={headerRef}>
          <h1>
            Selección fitness 
          </h1>
          <p>
            Para conseguir resultados es importante tener una buena seleccion de ejercicios, 
            con <b>"Selección Fitness"</b> no tenes que preocuparte por pensar que ejercicios deberias utilizar y cuales no, 
            con simplemente presionar un boton vas a obtener una seleccion de ejercicios perfectamente pensada no complicarte, no perder tiempo,
            y obtener resultados de forma eficaz y eficiente.
          </p>
        </div>
        <div className="header__div-figure">
          <figure className="header__figure">
            <img src="./src/assets/muscle-logo-header.svg" alt="brazo musculoso"/>
          </figure>
        </div>
        <div className="header__div-button">
          <button onClick={aEntrenarNavigate}>
            <a>COMENZAR</a>
          </button>
        </div>
      </header>
  
  )
}
