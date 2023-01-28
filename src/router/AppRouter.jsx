import { Route, Routes } from 'react-router-dom'
import { FitnessRoutes } from '../fitness-app/routes/FitnessRoutes'




export const AppRouter = () => {
  return (
    
    <Routes>
        <Route path='/*' element={ <FitnessRoutes/> }/> 
    </Routes>
  )
}
