
export const Ejercicios = ({ejercicios}) => {



  return (
    <>
    <div>
       <h4>Circuito 1</h4>
           <ul >
       {ejercicios.length > 0 
           ? ejercicios.slice(0,3).map(( ejercicio, index) =>
              <li key={ejercicio.id}>
               A.{index + 1} {ejercicio.name}
               </li>) 
           : <ul>
               <li>No hay ejercicios aún</li>
              </ul> }
           </ul>
    </div>
    <div>
       <h4>Circuito 2</h4>
           <ul >
       {ejercicios.length > 0 
           ? ejercicios.slice(3,6).map(( ejercicio, index) =>
              <li key={ejercicio.id}>
               B.{index + 1} {ejercicio.name}
               </li>) 
           : <ul>
               <li>No hay ejercicios aún</li>
              </ul> }
           </ul>
    </div>
    <div>
       <h4>Circuito 3</h4>
           <ul >
       {ejercicios.length > 0 
           ? ejercicios.slice(6,9).map(( ejercicio, index) =>
              <li key={ejercicio.id}>
               C.{index + 1} {ejercicio.name}
               </li>) 
           : <ul>
               <li>No hay ejercicios aún</li>
              </ul> }
           </ul>
    </div>
    </>
  )
}
