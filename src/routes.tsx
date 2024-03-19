import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Categorias from './pages/Categories'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
    </Routes>
  )
}

export default Router
