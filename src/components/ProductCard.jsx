import { useCarrito } from '../context/CarritoContext'
import { Link } from 'react-router-dom'

export default function ProductCard({ producto }) {
  const { agregarAlCarrito } = useCarrito()

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4 flex flex-col justify-between">
      <img src={producto.imagen} alt={producto.nombre} className="h-48 w-full object-cover rounded-xl" />
      <div className="mt-4">
        <h2 className="text-lg font-bold text-black">{producto.nombre}</h2>
        <p className="text-sm text-gray-600">{producto.descripcion.slice(0, 60)}...</p>
        <p className="text-blue-600 font-bold text-lg mt-1">S/ {Number(producto.precio).toFixed(2)}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => agregarAlCarrito(producto)}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded"
        >
          Añadir al carrito
        </button>
        <Link
          to={`/producto/${producto.id}`}
          className="flex-1 bg-gray-200 text-black py-1 px-2 rounded text-center"
        >
          Ver
        </Link>
      </div>
    </div>
  )
}
