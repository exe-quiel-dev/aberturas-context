
import { chapaSimple } from "../constants/puertas_ch_simple"
import ModalProducto from "../components/ModalProducto"


import useProducto from "../hooks/useProducto"
import CardProducto from "../components/CardProducto";

const Chapasimple = () => {
  const { modal,  } = useProducto();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {chapaSimple.map(puerta => (
        <CardProducto 
          key={puerta.id}
          prod={puerta}
        />
      ))}

      {modal && <ModalProducto />}

    </section>
  )
}

export default Chapasimple