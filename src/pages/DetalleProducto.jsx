import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../api/api'
import { useCarrito } from '../context/CarritoContext'

export default function DetalleProducto() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const { agregarAlCarrito } = useCarrito()

  useEffect(() => {
    api.get(`productos/${id}/`).then(res => setProducto(res.data))
  }, [id])

  if (!producto) return <p className="text-white text-center mt-10">Cargando producto...</p>

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 md:px-24 flex justify-center items-start">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        {/* Imagen principal */}
        <div className="w-full md:w-1/2 bg-gray-200 p-8 flex justify-center items-center">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="object-contain h-96 rounded-xl"
          />
        </div>

        {/* Detalles del producto */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{producto.nombre}</h1>
          <p className="text-gray-500 text-sm mb-6">{producto.descripcion}</p>

          {/* Precios */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-green-600">
              S/ {Number(producto.precio).toFixed(2)}
            </span>
            <span className="text-sm text-red-500 line-through">S/ {Number(producto.precio * 1.2).toFixed(2)}</span>
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">-20%</span>
          </div>

          {/* Botones */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => agregarAlCarrito(producto)}
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-xl w-full md:w-auto"
            >
              AGREGAR AL CARRITO
            </button>
            <button className="border border-green-600 text-green-600 hover:bg-green-100 font-medium py-2 px-6 rounded-xl w-full md:w-auto">
              STOCK DISPONIBLE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
