import { useCarrito } from '../context/CarritoContext'

export default function Carrito() {
  const { carrito, eliminarProducto, vaciarCarrito } = useCarrito()

  return (
    <div className="min-h-screen bg-[#111] text-white p-8">
      <h1 className="text-3xl font-bold mb-4">🛒 Carrito de Compras</h1>

      {carrito.length === 0 ? (
        <p className="text-gray-400">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {carrito.map(producto => (
              <li key={producto.id} className="bg-gray-800 p-4 rounded flex justify-between items-center">
                <div>
                  <h2 className="font-semibold">{producto.nombre}</h2>
                  <p>Cantidad: {producto.cantidad}</p>
                  <p className="text-blue-400">S/ {(producto.precio * producto.cantidad).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => eliminarProducto(producto.id)}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={vaciarCarrito}
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-black font-bold"
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  )
}
