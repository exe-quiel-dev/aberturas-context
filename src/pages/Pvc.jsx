import ventanasPvc from "../constants/ventanas_pvc";
import tecnodeck from "../constants/tecnodeck";
import zocalos from "../constants/zocalos";

import useProducto from "../hooks/useProducto"
import CardProducto from "../components/CardProducto";
import ModalVentana from '../components/ModalVentana';


const Pvc = () => {
  const { modal, } = useProducto();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {ventanasPvc.map(ventana => (
        <CardProducto
          key={ventana.id}
          prod={ventana}
        />
      ))}

      {tecnodeck.map(prod => (
        <CardProducto
          key={prod.id}
          prod={prod}
        />
      ))}

      {zocalos.map(prod => (
        <CardProducto
          key={prod.id}
          prod={prod}
        />
      ))}

      {modal && <ModalVentana />}

    </section>
  )
}

export default Pvc