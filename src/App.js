import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Anasayfa from './pages/Anasayfa'
import Hakkimizda from './pages/Hakkimizda'
import Menu from './pages/Menu'
import OnlineSiparis from './pages/OnlineSiparis'
import Galeri from './pages/Galeri'
import Subeler from './pages/Subeler'
import Iletisim from './pages/Iletisim'


const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Anasayfa/>} />
        <Route path='/hakkimizda' element={<Hakkimizda/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/online-siparisler' element={<OnlineSiparis/>} />
        <Route path='/galeri' element={<Galeri/>} />
        <Route path='/subeler' element={<Subeler/>} />
        <Route path='/iletisim' element={<Iletisim/>} />
      </Routes>
      <Footer />
      </Router>
    
  )
}

export default App

