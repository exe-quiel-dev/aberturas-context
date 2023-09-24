import { Link } from "react-router-dom"

import ofertas from "../constants/ofertas";

import ModalProducto from "../components/ModalProducto";
import CardProducto from "../components/CardProducto";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



// HOOKS
import useProducto from "../hooks/useProducto"

function Index() {
  const { modal, } = useProducto();
  return (
    <>
      <section className='w-full h-screen flex flex-col md:flex-row items-center justify-center md:justify-center banner-index gap-6'>
        <Carousel autoPlay={true} infiniteLoop={true} interval={7300} swipeable={true} showStatus={false} className="bg-slate-900 pt-10 w-full">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center flex-nowrap md:flex-wrap w-3/4 md:w-1/3 h-1/2 bg-slate-900 p-4 text-white">
              <h2 className="uppercase text-xl md:text-3xl font-bold mb-4">¿Ya conoces la linea PVC?</h2>
              <p className="text-md md:text-xl py-5 border-t">Contamos con la tecnología más innovadora disponible hoy en día para la renovación de ventanas que soluciona tus problemas de climatización del hogar, ruido y filtraciones.</p>
              <Link
                to='/pvc'
                className='uppercase text-lg md:text-2xl transition-all btn'
              >Ver ventanas</Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center flex-nowrap md:flex-wrap w-3/4 md:w-1/3 h-1/2 bg-slate-900 p-10 text-white">
              <h2 className="uppercase text-xl md:text-3xl font-bold mb-4">¿Buscas puertas seguras?</h2>
              <p className="text-md md:text-xl py-5 border-t">Fabricadas con materiales resistentes a cualquier asalto. Cuenta con cerradura con pernos de seguridad y llave codificada para mayor seguridad.</p>
              <Link
                to='/seguridad'
                className='uppercase text-lg md:text-2xl transition-all btn'
              >Ver Puertas</Link>
            </div>
          </div>
          {/* <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div> */}
        </Carousel>
      </section>
      <section className="flex flex-col min-h-screen items-center justify-center py-10 bg-gray-100">
          <h2 className="text-center uppercase text-xl md:text-2xl lg:text-6xl font-bold text-gray-800 my-10 w-full">Ofertas</h2>
        <div className="flex items-center justify-center">
          {ofertas.map(prod => (
            <CardProducto
              key={prod.id}
              prod={prod}
            />
          ))}
        </div>
        {modal && <ModalProducto />}
      </section>
    </>
  )
}

export default Index