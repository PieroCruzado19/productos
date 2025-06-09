import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Catalogo from './pages/Catalogo'
import Carrito from './pages/Carrito'
import DetalleProducto from './pages/DetalleProducto'
import NavBar from './components/NavBar'

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App
