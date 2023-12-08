import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page/LandingPage'
import Auth from './pages/Auth/Auth'
import ClientArea from './pages/client-area/ClientArea'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/area-de-cliente' element={<ClientArea/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
