import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Categorias from './pages/Categories'
import Product from './pages/Product'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/produto/:id" element={<Product />} />
    </Routes>
  )
}

export default Router
