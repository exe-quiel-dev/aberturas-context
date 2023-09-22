import ventanas from '../constants/ventanas'

import useProducto from "../hooks/useProducto"
import CardProducto from "../components/CardProducto";
import ModalVentana from '../components/ModalVentana';

const Ventanas = () => {
  const { modal,  } = useProducto();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {ventanas.map(ventana => (
        <CardProducto 
          key={ventana.id}
          prod={ventana}
        />
      ))}

      {modal && <ModalVentana />}

    </section>
  )
}

export default Ventanas