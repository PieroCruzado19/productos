import { useEffect, useState } from 'react'
import api from '../api/api'
import ProductCard from '../components/ProductCard'

export default function Catalogo() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get('productos/')
      .then(res => {
        setProductos(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Error al cargar productos')
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-[#111] min-h-screen py-10 px-4 md:px-16 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">Catálogo de Productos</h1>

      {loading && (
        <p className="text-center text-gray-400 animate-pulse">Cargando productos...</p>
      )}

      {error && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}

      {!loading && productos.length === 0 && (
        <p className="text-center text-gray-400">No hay productos disponibles.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  )
}
