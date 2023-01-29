import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import burguerMenu from '../../../assets/nav-burguer-menu.svg'
import './navbar.css'



export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () =>{
    if(window.scrollY >50){
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const toggleNavbar = () =>{
    setIsOpen(!isOpen);
  }
  
  //FUNCIONES PARA VIAJAR AL HEADER Y LA SECTION

  const navigate = useNavigate();
  const headerRef = useRef(null);
  const sectionRef = useRef(null);

  const handleGoToHeader = () =>{

    navigate('/', {
      replace: true
    });
    headerRef.current.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start'
    }); 
  }

  const handleGoToSection = () =>{

    navigate('/', {
      replace: true
    });

    sectionRef.current.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    })
  }
  
  const aEntrenarNavigate = () => {
    navigate('/miEntrenamiento', {
      replace: true
    });
  }

  return {
    headerRef,
    sectionRef,
    aEntrenarNavigate,
    toggleNavbar,
    render: (
    <nav className={`${isScrolled ? "nav__scrolled" : ''}`}>
      <a id="header-link" 
        onClick={handleGoToHeader}>
        <div className={`${isScrolled 
          ? "nav__logo nav__logo-scrolled" 
          : "nav__logo"}`}
          >
          <span className={`${isScrolled 
            ? "nav__logo-span nav__logo-span-scrolled" 
            : "nav__logo-span"}`}
            >
            Selección Fitness
          </span>
        </div>
      </a>
      <img onClick={toggleNavbar} 
      id="menu-burguer" className= "nav__burguer-menu"  src={burguerMenu} alt="" />
      
      <ul id="nav-menu " 
        className = {` ${isOpen 
          ? 'show_display_grid' 
          : '' }`}
        >
        <li>
          <a id="section-link" 
            onClick={handleGoToSection}>
            ¿Cómo funciona?
          </a>
        </li>
        <li>
          <a 
            onClick={aEntrenarNavigate} id="randomizer-link">
            A entrenar
          </a>
        </li>
        <li>
          <a href="/">
            Versiones
          </a>
        </li>
      </ul>

    </nav>
      
  )}
}
