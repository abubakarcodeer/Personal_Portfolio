import Home  from '../src/Pages/Home'
import  NotFound  from '../src/Pages/NotFound'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<NotFound />} />
   </Routes>
   </>
  )
}

export default App