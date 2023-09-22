
import { chapaDoble, inyectadas } from "../constants/puertas_doble_ch"
import ModalProducto from "../components/ModalProducto"


import useProducto from "../hooks/useProducto"
import CardProducto from "../components/CardProducto";

const ChapaDoble = () => {
  const { modal, } = useProducto();

  return (
    <>
      <h2 className="text-center uppercase text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 my-10 w-full">Chapa doble sin inyectar</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {chapaDoble.map(puerta => (
          <CardProducto
            key={puerta.id}
            prod={puerta}
          />
        ))}
      </section>

      <h2 className="text-center uppercase text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 my-10 w-full">Chapa doble Inyectada</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {inyectadas.map(puerta => (
          <CardProducto
            key={puerta.id}
            prod={puerta}
          />
        ))}

        {modal && <ModalProducto />}
      </section>
    </>
  )
}

export default ChapaDoble