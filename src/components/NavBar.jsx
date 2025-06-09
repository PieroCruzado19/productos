import { useCarrito } from '../context/CarritoContext'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const { carrito } = useCarrito()

  return (
    <nav className="bg-[#1a2433] text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold flex items-center gap-2">🛒 MCC.TEC</h1>
      <div className="flex gap-6 font-semibold text-sm items-center">
        <Link to="/catalogo" className="hover:text-yellow-300">Productos</Link>
        <Link to="/carrito" className="relative hover:text-yellow-300">
          Carrito
          {carrito.length > 0 && (
            <span className="ml-1 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">
              {carrito.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}
