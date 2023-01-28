
const state = {
    seleccionEjercicios: [],
    isFull: false,
}


const setEjercicios = ( ejercicios, filter ) => {
    state.seleccionEjercicios =  ejercicios;
    state.isFull = true;
}

export const getSeleccionEjercicios = () =>{
    return [...state.seleccionEjercicios]
}




export default {
    setEjercicios,
    getSeleccionEjercicios,
    getIsFull: () => state.isFull,
}