import _ from "underscore";
import {exercises} from "../data/data";
import fitnessStore from '../store/fitness.store'



export const getEjerciciosByType = (buttonId) =>{
    
    if(buttonId === 'FullBody'){
        const ejercicios = _.shuffle(exercises);
        fitnessStore.setEjercicios(ejercicios, buttonId)

    } else {

    const ejercicios = _.shuffle(exercises.filter ( ejercicio => 
        ejercicio.type === buttonId
        ));

    fitnessStore.setEjercicios(ejercicios, buttonId)
    }  
    
}