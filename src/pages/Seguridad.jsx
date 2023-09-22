import seguridad from "../constants/puertas_seguridad";
import ModalProducto from "../components/ModalProducto"


import useProducto from "../hooks/useProducto"
import CardProducto from "../components/CardProducto";

const Seguridad = () => {
  const { modal, } = useProducto();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {seguridad.map(puerta => (
          <CardProducto
            key={puerta.id}
            prod={puerta}
          />
        ))}

        {modal && <ModalProducto />}
      </section>
  )
}

export default Seguridad