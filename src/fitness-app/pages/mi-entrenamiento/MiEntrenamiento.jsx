import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/navbar/Navbar'
import { SectionEntrenamiento } from './components/SectionEntrenamiento'

export const MiEntrenamiento = () => {

  const {render, toggleNavbar} = Navbar();


  return (
    <>
    {render}
    <main>
      <SectionEntrenamiento/>
    </main>
    <Footer/>
    </>
  )
}
