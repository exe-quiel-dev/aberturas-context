import aluminio from "../constants/puertas_aluminio";
import ModalProducto from "../components/ModalProducto"


import useProducto from "../hooks/useProducto"
import CardProducto from "../components/CardProducto";

const Aluminio = () => {
  const { modal,  } = useProducto();  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {aluminio.map(prod => (
        <CardProducto 
          key={prod.id}
          prod={prod}
        />
      ))}

      {modal && <ModalProducto />}

    </section>
  )
}

export default Aluminio