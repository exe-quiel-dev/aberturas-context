// COMPONENTS
import CardProducto from "../components/CardProducto"
import ModalPlaca from "../components/ModalPlaca"

// HOOKS
import useProducto from "../hooks/useProducto"

// CONSTANTS
import { placa } from "../constants/puertas_placa"

const Placa = () => {
  const { modal, } = useProducto();

  return (
    <>
      <h2 className="text-center uppercase text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 my-10 w-full">Chapa doble sin inyectar</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {placa.map(puerta => (
          <CardProducto
            key={puerta.id}
            prod={puerta}
          />
        ))}
        {modal && <ModalPlaca />}
      </section>
    </>
  )
}

export default Placa