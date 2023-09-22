
import { Outlet, Link, useLocation } from 'react-router-dom'


import { AiOutlineInstagram, AiOutlineEnvironment, AiOutlineFacebook, AiOutlineWhatsApp } from 'react-icons/ai';

import logo from '../assets/logo.png'

function Layout() {
    const location = useLocation()

    return (
        <>
            <nav className="flex items-center bg-nav p-3 flex-wrap relative md:sticky top-0 z-10 border-b border-gray-200">
                <h1><Link to="/" className="p-2 mr-4 inline-flex items-center">
                    <span className="text-xl text-white font-bold uppercase tracking-wide"
                    ><img src={logo} alt='Imagen logotipo' className='hidden xl:inline w-1/6' /></span>
                </Link></h1>
                <h1><Link to="/" className="p-2 mr-4 inline-flex items-center">
                    <span className="text-xl text-white font-bold uppercase tracking-wide sm:inline xl:hidden"
                    >Aberturas Marquez</span>
                </Link></h1>
                <div
                    className="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                    id="navigation"
                >
                    <div
                        className="grid grid-cols-2 md:flex md:flex-col lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto"
                    >
                        <Link
                            to="/"
                            className={`${location.pathname === '/' ? 'text-orange-400' : 'text-white'} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white`}
                        >
                            <span>Inicio</span>
                        </Link>
                        <Link
                            to="/puertas"
                            className={`${location.pathname === '/puertas' ? 'text-orange-400' : 'text-white'} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white`}
                        >
                            <span>Puertas</span>
                        </Link>
                        <Link
                            to="/ventanas"
                            className={`${location.pathname === '/ventanas' ? 'text-orange-400' : 'text-white'} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white`}
                        >
                            <span>Ventanas</span>
                        </Link>
                        <Link
                            to="/pvc"
                            className={`${location.pathname === '/pvc' ? 'text-orange-400' : 'text-white'} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white`}
                        >
                            <span>Linea PVC</span>
                        </Link >
                        <Link
                            to="/nosotros"
                            className={`${location.pathname === '/nosotros' ? 'text-amber-500' : 'text-white'} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white`}
                        >
                            <span>Contacto</span>
                        </Link>
                    </div>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
                    <div
                        className="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                        id="navigation"
                    >
                        <div
                            className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
                        >
                            <div className='w-1/3 text-white flex items-center justify-center'>
                                <a href='https://instagram.com/aberturas_marquez?igshid=MzRlODBiNWFlZA==' target='_blank' rel='noreferrer' alt="Logotipo instagram"><AiOutlineInstagram className='mx-2 w-6 h-6 hover:text-violet-500 transition-colors hover:cursor-pointer' /></a>
                                <a href='https://wa.me/541168164079' target='_blank' rel='noreferrer' alt="Logotipo whatsapp"><AiOutlineWhatsApp className='mx-2 w-6 h-6 hover:text-green-500 transition-colors hover:cursor-pointer' /></a>
                                <a href='https://www.facebook.com/aberturas.marquez.3?mibextid=ZbWKwL' target='_blank' rel='noreferrer' alt="Logotipo facebook"><AiOutlineFacebook className='mx-2 w-6 h-6 hover:text-blue-600 transition-colors hover:cursor-pointer' /></a>
                                <Link to='/nosotros' alt="Icono nosotros"><AiOutlineEnvironment className='mx-2 w-6 h-6 hover:text-red-500 transition-colors hover:cursor-pointer' /></Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </footer>
        </>
    )
}

export default Layout