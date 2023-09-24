/* eslint-disable react/prop-types */

import useProducto from "../hooks/useProducto"

const CardProducto = ({prod}) => {
  const { handleModalProducto, setProducto } = useProducto()

  return (
    <div
      className="w-full text-center border border-gray-300 flex flex-col items-center justify-center p-2 hover:shadow-md transition-all hover:border-gray-400"
    >
      <img src={prod.img} alt={`Imagen ${prod.nombre}`} onClick={handleModalProducto} />
      <h2>{prod.nombre}</h2>
      <button
        className="my-2 text-2xl btn p-2 text-gray-600 hover:text-black transition-all px-8"
        onClick={() => {
          handleModalProducto()
          setProducto(prod)
        }}
      ><span className="span-btn uppercase">Info</span></button>
    </div>
  )
}

export default CardProducto