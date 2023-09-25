
import { Outlet, Link, useLocation } from 'react-router-dom'


import { AiOutlineInstagram, AiOutlineEnvironment, AiOutlineFacebook, AiOutlineWhatsApp } from 'react-icons/ai';

import logo from '../assets/logo.png'

function Layout() {
    const location = useLocation()

    const year = new Date().getFullYear();

    return (
        <>
            <nav className="flex items-center bg-nav flex-wrap relative md:sticky top-0 z-10 border-b border-gray-200">
                <div className='w-1/6'>
                    <div className='w-full'>
                        <h2 className='w-full text-center'><Link to="/" className="p-2 mr-4 inline-flex items-center" alt='Imagen logotipo'>
                            <span className="text-xl text-white font-bold uppercase tracking-wide"
                            ><img src={logo} alt='Imagen logotipo' className='hidden lg:inline w-3/5' /></span>
                        </Link></h2>
                    </div>
                </div>
                <div className='hidden lg:flex items-center justify-center w-1/6'>
                    <h1
                        className='text-center border-l border-gray-600'
                    ><Link to="/" className="p-2 mr-4 inline-flex items-center">
                            <span className="text-xl text-white font-bold uppercase tracking-wide"
                            >Aberturas Marquez</span>
                        </Link></h1>
                </div>
                <div
                    className="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                    id="navigation"
                >
                    <div
                        className="grid grid-cols-2 lg:flex lg:flex-col xl:inline-flex xl:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto"
                    >
                        <Link
                            to="/"
                            className={`${location.pathname === '/' ? 'text-orange-400' : 'text-whitorange-400 transition-colors'} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-orange-400 transition-colors`}
                        >
                            <span>Inicio</span>
                        </Link>
                        <Link
                            to="/puertas"
                            className={`${location.pathname === '/puertas' ? 'text-orange-400' : 'text-white'} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-orange-400 transition-colors`}
                        >
                            <span>Puertas</span>
                        </Link>
                        <Link
                            to="/ventanas"
                            className={`${location.pathname === '/ventanas' ? 'text-orange-400' : 'text-white'} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-orange-400 transition-colors`}
                        >
                            <span>Ventanas</span>
                        </Link>
                        <Link
                            to="/pvc"
                            className={`${location.pathname === '/pvc' ? 'text-orange-400' : 'text-white'} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-orange-400 transition-colors`}
                        >
                            <span>Linea PVC</span>
                        </Link >
                        <Link
                            to="/nosotros"
                            className={`${location.pathname === '/nosotros' ? 'text-amber-500' : 'text-white'} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-orange-400 transition-colors`}
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
                    <div className='flex flex-col justify-center'>
                        <p className='text-xs text-white py-2'>© Todos los derechos reservados {year}</p>
                    </div>
                    <div
                        className="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                        id="navigation"
                    >
                        <div
                            className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
                        >
                            <div className='w-1/3 text-white flex items-center justify-center'>
                                <a href='https://www.instagram.com/aberturasmarquez/' target='_blank' rel='noreferrer' alt="Logotipo instagram"><AiOutlineInstagram className='mx-2 w-6 h-6 hover:text-violet-500 transition-colors hover:cursor-pointer' /></a>
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