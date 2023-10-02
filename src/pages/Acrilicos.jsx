import acrilicos from "../constants/acrilicos";

import useProducto from "../hooks/useProducto"
import CardProducto from "../components/CardProducto";
import ModalVentana from '../components/ModalVentana';

const Acrilicos = () => {
  const { modal, } = useProducto();

  return (
    <>
      <h2 className="text-center uppercase text-xl md:text-2xl lg:text-6xl font-bold text-gray-800 my-10 w-full">Mamparas</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 min-h-screen">
        {acrilicos.map(prod => (
          <CardProducto
            key={prod.id}
            prod={prod}
          />
        ))}

        {modal && <ModalVentana />}

      </section>    
      <section>
      <h2 className="text-center uppercase text-xl md:text-2xl lg:text-6xl font-bold text-gray-800 my-10 w-full">Aleros</h2>
      </section>
      </>
  )
}

export default Acrilicos