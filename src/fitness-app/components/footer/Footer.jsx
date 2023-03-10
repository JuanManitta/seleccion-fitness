import { useNavigate } from 'react-router-dom'
import './footer.css'
import linkedin from '../../../assets/footer-linkedin.svg'
import mail from '../../../assets/footer-mail.svg'
import twitter from '../../../assets/footer-twitter.svg'


export const Footer = () => {
  
  const navigate = useNavigate();
  const navigateToAEntrenar = () =>{
    navigate('./miEntrenamiento', {
      replace:true,
    })
  }
  
  return (
    <footer>
      <section className="footer__section-logo">
        <h3>Selección Fitness</h3>

      </section>
      <section className="footer__section-nav">
        <ul>
          <li>
            <img src={linkedin} alt="Linkedin"/>
            <a href="">LinkedIn</a>
          </li>
          <li>
            <img src={twitter} alt="Twitter"/>
            <a href="">Twitter</a>
          </li>
          <li>
            <img src={mail} alt="Email"/>
            <a href="">Email</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#section">¿Cómo funciona?</a>
          </li>
          <li>
            <a href="">Versiones</a>
          </li>
          <li>
            <a href='' onClick={navigateToAEntrenar}>Comenzar</a>
          </li>
        </ul>

      </section>
      <section className="footer__section-copyright">
        <p>Selección Fitness &copy;2023 Todos los derechos reservados -- Programado y diseñado por Juan Manitta</p>
      </section>
    </footer>
  )
}
