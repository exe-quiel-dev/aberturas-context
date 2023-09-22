/* eslint-disable react/prop-types */

import useProducto from "../hooks/useProducto"

const CardProducto = ({prod}) => {
  const { handleModalProducto, setProducto } = useProducto()

  return (
    <div
      className="w-full text-center border border-gray-300 flex flex-col items-center justify-center p-2"
    >
      <img src={prod.img} alt={`Imagen ${prod.nombre}`} onClick={handleModalProducto} />
      <h2>{prod.nombre}</h2>
      <button
        className="my-2 text-2xl btn p-2 text-gray-400 hover:text-gray-800 transition-all px-5"
        onClick={() => {
          handleModalProducto()
          setProducto(prod)
        }}
      >Info</button>
    </div>
  )
}

export default CardProducto