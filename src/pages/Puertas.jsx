import { Link } from "react-router-dom"

const Puertas = () => {
    return (
        <section className="min-h-screen h-screen flex items-center jusrify-center bg-puertas">
            <div className="flex flex-col lg:grid lg:grid-cols-6 items-center justify-items-center p-10 w-full h-full gap-6 backdrop-blur-sm">
          <Link
            to='/chapasimple'
            className="text-white text-xl bg-white/25 btn p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          > <span className="span-btn">Chapa Simple</span> </Link>
          <Link
            to='/doblechapa'
            className="text-white text-xl bg-white/25 btn p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          ><span className="span-btn">Chapa Doble</span></Link>
          <Link
            to='/seguridad'
            className="text-white text-xl bg-white/25 btn p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          ><span className="span-btn">De Seguridad</span></Link>
          <Link
            to='/placa'
            className="text-white text-xl bg-white/25 btn p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          ><span className="span-btn">Placa</span></Link>
          <Link
            to='/aluminio'
            className="text-white text-xl bg-white/25 btn p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          ><span className="span-btn">Aluminio</span></Link>
          <Link
            to='/plegadizas'
            className="text-white text-xl bg-white/25 btn p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          ><span className="span-btn">Plegadizas</span></Link>
        </div>
        </section>
    )
}

export default Puertas