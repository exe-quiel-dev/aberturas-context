import useProducto from "../hooks/useProducto"

const ModalVentana = () => {
  const { producto, handleModalProducto } = useProducto()

  return (
    <div className="flex items-center justify-center container mx-auto z-50">
      <div
        className="modal flex flex-col items-center justify-center sticky p-10">
        <div className="bg-gray-100 w-full md:w-1/2 rounded p-5 flex flex-col items-center justify-center">
        <button
          className="text-3xl text-gray-400 hover:text-gray-900 font-black transition-all px-4 btn-close self-end"
          onClick={handleModalProducto}
        ><span className="span-btn-close"> X </span> </button>
          <img src={producto.img} alt={producto.nombre} className="w-5/6" />
          <div className="p-4 w-full text-center">
            <h2 className="font-bold uppercase text-xl mb-4 border-b border-gray-200 text-center">{producto.nombre}</h2>
            <div className="grid grid-cols-1 items-center text-center">
              <p className="font-bold py-2">Caracteristicas: <span className="font-light">{producto.caracteristicas || producto.info}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalVentana