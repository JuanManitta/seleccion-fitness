import './sectionHome.css'


export const SectionHome = ({sectionRef}) => {
  return (
    <section className='section__container' id="section" ref={sectionRef} >
        <div className="section__figure">
          <figure>
            <img src="./public/section-imagen-muestra.png" alt=""/>
          </figure>
        </div>
        <div className="section__text">
          <h2>¿Cómo funciona?</h2>
          <p>Selecciona entre 4 opciones: <span>(tren superior, tren inferior, zona media o fullbody)</span>,
            para obtener una seleccion de ejercicios series y repeticiones perfectamente pensadas
            para cualquier objetivo, despues, adaptá las cargas y lo que consideres necesario según tu nivel.
            Podes utilizar esa misma seleccion por 4-6 semanas para ir progresando y luego volver a generar otra
            seleccion de ejercicios. Si queres saber mas y leer algunos consejos, hace click en <a href="/">Leer mas</a>
          </p>
        </div>
         <div className="section__button">
        </div> 
      </section>
  )
}
