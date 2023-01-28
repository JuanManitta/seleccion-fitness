
export const SeriesYRepes = ({ejercicios}) => {


  return (

    <>
    <div>
        <h4>Series/reps</h4>
        <ul >
        {
        ejercicios.length > 0 
            ? ejercicios.slice(0,3).map(( ejercicio, index) =>  
               <li key={ejercicio.id}>
                {ejercicio.series_reps}
                </li> ) 
            : <ul>
                <li>No hay ejercicios aún</li>
              </ul> 
        }
            </ul>
    </div>
    <div>
        <h4>Series/reps</h4>
        <ul >
        {
        ejercicios.length > 0 
            ? ejercicios.slice(3,6).map(( ejercicio, index) =>  
               <li key={ejercicio.id}>
                {ejercicio.series_reps}
                </li> ) 
            : <ul>
                <li>No hay ejercicios aún</li>
              </ul> 
        }
            </ul>
    </div>
    <div>
        <h4>Series/reps</h4>
        <ul >
        {
        ejercicios.length > 0 
            ? ejercicios.slice(6,9).map(( ejercicio, index) =>  
               <li key={ejercicio.id}>
                {ejercicio.series_reps}
                </li> ) 
            : <ul>
                <li>No hay ejercicios aún</li>
              </ul> 
        }
            </ul>
    </div>
   
    </>
  )
}
