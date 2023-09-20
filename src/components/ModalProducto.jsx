import useProducto from "../hooks/useProducto"

const ModalProducto = () => {
  const { producto, handleModalProducto } = useProducto()

  return (
    <div className="flex items-center justify-center container mx-auto z-50">
      <div 
        className="modal flex items-center justify-center sticky p-10"
        onClick={handleModalProducto}
      >
        <div className="bg-gray-100 w-full md:w-1/2 rounded p-5">
          <img src={producto.img} alt={producto.nombre} className="w-full" />
          <div className="p-4 w-full text-center">
            <h2 className="font-bold uppercase text-xl mb-4 border-b border-gray-200 text-center">{producto.nombre}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center text-center">
              <p className="font-bold py-2">Marco: <span className="font-light">{producto.marco}</span></p>
              <p className="font-bold py-2">Hoja: <span className="font-light">{producto.hoja}</span></p>
              <p className="font-bold py-2">Bisagras: <span className="font-light">{producto.bisagras}</span></p>
              <p className="font-bold py-2">Cerradura: <span className="font-light">{producto.cerradura}</span></p>
            </div>
            <button
              className="my-2 md:my-4 text-2xl p-2 bg-gray-300 hover:bg-red-600 transition-all rounded text-white font-bold"
              onClick={handleModalProducto}
            >
              Cerrar X
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalProducto