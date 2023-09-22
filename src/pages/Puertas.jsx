import { Link } from "react-router-dom"

const Puertas = () => {
    return (
        <section className="min-h-screen h-screen flex items-center jusrify-center bg-puertas">
            <div className="flex flex-col lg:grid lg:grid-cols-6 items-center justify-items-center p-10 w-full h-full gap-6 backdrop-blur-sm">
          <Link
            to='/chapasimple'
            className="text-white text-xl bg-white/25 btn p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          >Chapa Simple</Link>
          <Link
            to='/doblechapa'
            className="text-white text-xl bg-white/25 btn p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          >Chapa Doble</Link>
          <Link
            to='/seguridad'
            className="text-white text-xl bg-white/25 btn p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          >De Seguridad</Link>
          <Link
            to='/placa'
            className="text-white text-xl bg-white/25 btn p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          >Placa</Link>
          <Link
            to='/aluminio'
            className="text-white text-xl bg-white/25 btn p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          >Aluminio</Link>
          <Link
            to='/plegadizas'
            className="text-white text-xl bg-white/25 btn p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          >Plegadizas</Link>
        </div>
        </section>
    )
}

export default Puertas