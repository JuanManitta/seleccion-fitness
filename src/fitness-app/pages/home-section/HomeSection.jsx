import React, { useRef, useState } from 'react'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/navbar/Navbar'
import { HomeHeader } from './components/HomeHeader'
import { SectionHome } from './components/SectionHome'

export const HomeSection = () => {


  const {
    render,
    headerRef,
    sectionRef,
    aEntrenarNavigate,
  } = Navbar()

  return (
    <>
    {render}
    <main>
    <HomeHeader 
    headerRef={headerRef}
    aEntrenarNavigate={aEntrenarNavigate} />
    <SectionHome 
    sectionRef={sectionRef} />
    </main>
    
    <Footer/>
    </>
  )
}
