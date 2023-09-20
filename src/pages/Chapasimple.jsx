
import { chapaSimple } from "../constants/puertas_ch_simple"
import ModalProducto from "../components/ModalProducto"


import useProducto from "../hooks/useProducto"

const Chapasimple = () => {


  const { setProducto, handleModalProducto, modal } = useProducto();


  return (
    <section className="grid grid-cols-4 gap-6">
      {chapaSimple.map(puerta => (
        <div
          key={puerta.id}
          className="w-full text-center border border-gray-300"
        >
          <img src={puerta.img} alt={`Imagen ${puerta.nombre}`} onClick={handleModalProducto} />
          <h2>{puerta.nombre}</h2>
          <button
            className="my-2 text-2xl btn p-2"
            onClick={() => {
              handleModalProducto()
              setProducto(puerta)
            }}
          >Info</button>
        </div>
      ))}

      {modal && <ModalProducto />}

    </section>
  )
}

export default Chapasimple