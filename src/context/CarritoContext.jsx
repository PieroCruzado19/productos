import { createContext, useContext, useState } from 'react'

const CarritoContext = createContext()

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    const existente = carrito.find(p => p.id === producto.id)
    if (existente) {
      setCarrito(carrito.map(p =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
      ))
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    }
  }

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter(p => p.id !== id))
  }

  const vaciarCarrito = () => setCarrito([])

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarProducto, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  )
}

export const useCarrito = () => useContext(CarritoContext)
