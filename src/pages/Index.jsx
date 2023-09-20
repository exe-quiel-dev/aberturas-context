import { Link } from "react-router-dom"

import img1 from '../assets/puerta-placa-pino-marco-pino-finger-jo.webp'

// COMPONENTS
// import ModalProducto from "../components/ModalProducto"

// HOOKS
// import useProducto from "../hooks/useProducto"

function Index() {
  // const {setProducto, handleModalProducto, modal} = useProducto();

  return (
    <>
        <section className='w-full h-screen flex flex-col md:flex-row items-center justify-center md:justify-center banner-index gap-6'>
          <div className="flex flex-col items-center justify-center flex-nowrap md:flex-wrap w-3/4 md:w-1/3 h-1/2 bg-slate-900/50 p-4 text-white">
            <h1 className="uppercase text-xl md:text-3xl font-bold mb-4">¿Ya conoces la linea PVC?</h1>
            <p className="text-md md:text-xl py-5 border-t">Contamos con la tecnología más innovadora disponible hoy en día para la renovación de ventanas que soluciona tus problemas de climatización del hogar, ruido y filtraciones.</p>
            <Link
              to='/ventanas'
              className='uppercase text-lg md:text-2xl transition-all btn p-4'
            >Ver ventanas</Link>
          </div>
          <div className="flex flex-col items-center justify-center flex-nowrap md:flex-wrap w-3/4 md:w-1/3 h-1/2 bg-slate-900/50 p-4 text-white">
            <h1 className="uppercase text-xl md:text-3xl font-bold mb-4">¿Buscas puertas seguras?</h1>
            <p className="text-md md:text-xl py-5 border-t">Fabricadas con materiales resistentes a cualquier asalto. Cuenta con cerradura con pernos de seguridad y llave codificada para mayor seguridad.</p>
            <Link
              to='/puertas'
              className='uppercase text-lg md:text-2xl transition-all btn p-4'
            >Ver Puertas</Link>
          </div>
        </section>
        <section className="flex flex-col min-h-screen items-center justify-center py-10 bg-gray-100">
          <h2 className="text-center uppercase text-xl md:text-2xl lg:text-6xl font-bold text-gray-800 my-10 w-full">Ofertas</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className='py-5 px-3 flex flex-col items-center rounded'>
              <img src={img1} alt="Imagen Puerta roble oferta" className='w-1/2 rounded' />
              <h3 className='text-2xl font-bold border-b border-spacing-2 uppercase py-2'>Puerta Placa Pino</h3>
              <button 
                className="my-2 text-2xl btn p-4" 
              >
                +Info
              </button>
            </div>
            <div className='py-5 px-3 flex flex-col items-center rounded'>
              <img src={img1} alt="Imagen Puerta roble oferta" className='w-1/2 rounded' />
              <h3 className='text-2xl font-bold border-b border-spacing-2 uppercase py-2'>Puerta Placa Pino</h3>
              <button 
                className="my-2 text-2xl btn p-4" 
              >
                +Info
              </button>
            </div>
            <div className='py-5 px-3 flex flex-col items-center rounded'>
              <img src={img1} alt="Imagen Puerta roble oferta" className='w-1/2 rounded' />
              <h3 className='text-2xl font-bold border-b border-spacing-2 uppercase py-2'>Puerta Placa Pino</h3>
              {/* <p className='py-2 font-light text-lg text-center'>Puerta placa con hoja de pino y marco de pino. Cerradura simple paleta con 1 llave y 2 bocallaves.</p> */}
              <button 
                className="my-2 text-2xl btn p-4" 
              >
                +Info
              </button>
            </div>
          </div>
          {/* {modal && <ModalProducto />} */}
        </section>
    </>
  )
}

export default Index