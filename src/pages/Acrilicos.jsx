import acrilicos from "../constants/acrilicos";

import useProducto from "../hooks/useProducto"
import CardProducto from "../components/CardProducto";
import ModalVentana from '../components/ModalVentana';

const Acrilicos = () => {
  const { modal,  } = useProducto();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {acrilicos.map(prod => (
        <CardProducto 
          key={prod.id}
          prod={prod}
        />
      ))}

      {modal && <ModalVentana />}

    </section>
  )
}

export default Acrilicos