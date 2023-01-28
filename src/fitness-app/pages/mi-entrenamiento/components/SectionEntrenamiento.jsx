import { useEffect, useState } from 'react';
import  fitnessStore  from '../../../../store/fitness.store';
import './sectionMiEntrenamiento.css'


import { getEjerciciosByType } from '../../../../use-cases/get-ejercicios-by-type';
import { Ejercicios } from './rutinas/tren-superior-inferior/Ejercicios';
import { SeriesYRepes } from './rutinas/tren-superior-inferior/SeriesYRepes';




export const SectionEntrenamiento = () => {

    const [ejercicios, setEjercicios] = useState([]);
    const [ejerciciosActualizados, setEjerciciosActualizados] = useState(false);

    const handleButtonType = ( buttonId ) =>{
    
        getEjerciciosByType(buttonId);
        setEjerciciosActualizados(true)
    };

    useEffect(() => {
       
        const seleccionEjercicios = fitnessStore.getSeleccionEjercicios();
        setEjercicios(seleccionEjercicios)
        setEjerciciosActualizados(false)

    }, [ejerciciosActualizados])


  return (

    <section id="section-randomizer" className={`${ejercicios.length === 0 
        ? 'section__no-ejercicios' 
        : 'section__randomizer'}`}
        >

        {
            ejercicios.length >= 6 
            ? <div className="section__workout">
            <Ejercicios 
            ejercicios={ejercicios}/>
            
            <SeriesYRepes 
            ejercicios={ejercicios}/>
            </div>
            : <div className='section__sin-ejercicios'>
                <p>No hay ejercicios aún</p>
            </div> 
        }

        <div className="section__buttons">
            <button id="Tren superior" 
                onClick={() =>handleButtonType("Tren superior")} 
                className="section__button-active">
                Tren superior
            </button>

            <button id="Tren inferior" 
                onClick={() =>handleButtonType("Tren inferior")} 
                className="section__button-active">
                Tren inferior
            </button>

            <button id="button-zonaMedia" 
            className="section__button-active">
                Zona media
            </button>

            <button id="button-fullBody"
            onClick={() =>handleButtonType("FullBody")} 
            className="section__button-active">
                Fullbody
            </button>
            {/* <button id="button-obtener"> obtener </button> */}
        </div>
      </section>
  )
}
