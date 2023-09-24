import plegadizas from "../constants/puertas_plegadizas";
import ModalPlegadizas from "../components/ModalPlegadizas";

import useProducto from "../hooks/useProducto"
import CardProducto from "../components/CardProducto";

const Plegadizas = () => {
  const { modal,  } = useProducto(); 
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {plegadizas.map(prod => (
        <CardProducto 
          key={prod.id}
          prod={prod}
        />
      ))}

      {modal && <ModalPlegadizas />}

    </section>
  )
}

export default Plegadizas