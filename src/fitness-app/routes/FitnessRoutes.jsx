import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeSection } from '../pages/home-section/HomeSection'
import { MiEntrenamiento } from '../pages/mi-entrenamiento/MiEntrenamiento'
import { Version } from '../pages/version/Version'




export const FitnessRoutes = () => {

  return (

    <Routes>
     


      
      <Route path='/' element={<HomeSection/>}/>
      
      <Route path='/*' element={<Navigate to='/' />}/>
      
      {/* <Route path='como-funciona' element={<ComoFunciona/>}/> */}
      <Route path='versiones' element={<Version/>}/>
      <Route path='miEntrenamiento' element={<MiEntrenamiento/>}/>
        


    </Routes>
  )
}
