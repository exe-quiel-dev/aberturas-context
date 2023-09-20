
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp } from 'react-icons/ai';

import mapa from '../assets/map.jpg'

const Nosotros = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-2 min-h-screen bg-black/25">
            <div className="w-full md:w-1/2 text-white">
                <h1 className="text-center uppercase text-xl md:text-2xl lg:text-4xl font-black">Nosotros</h1>
                <p className="text-md md:text-lg font-light py-4">En Aberturas Marquez nos ocupamos de asesorar al cliente sobre sus mejores opciones para sus necesidades teniendo en cuenta la relación calidad precio. Priorizamos el plazo de entrega fijado para brindarles un buen servicio a nuestros clientes. Trabajamos con líneas de productos economicas y con líneas premium para que el cliente pueda elegir lo que mas se adapte a sus necesidades y su presupuesto.
                </p>
            </div>
            <div className="p-4 w-full bg-gray-100 flex flex-col items-center justify-center">
                <h2 className="text-center uppercase text-xl md:text-2xl lg:text-4xl font-black py-5">¿ Donde nos encontramos ?</h2>
                <div className='w-full md:w-2/3 flex flex-col items-center'>
                    <img src={mapa} alt="Imagen de mapa" className='w-full md:w-4/5 my-2' />
                </div>
                <div className='text-gray-800'>
                    <p className="text-lg py-4 font-semibold text-center border-b border-gray-200 border-spacing-4">Av. Brig. Gral. Juan Manuel de Rosas 2475, B1655 José León Suárez, Provincia de Buenos Aires</p>
                    <p className="text-lg py-4 font-semibold text-center border-b border-gray-200">Horarios de atención: Lunes a Viernes de 9:00 a 12:30 / 15:00 a 19:00 - Sabados de 9:00 a 13:00</p>
                    <h3 className="text-start uppercase text-lg md:text-xl lg:text-2xl font-black my-2">Contacto</h3>
                    <p className="text-lg py-2 font-semibold text-start"><AiOutlineWhatsApp className='inline'/> 11-6816-4079 ( Ezequiel )</p>
                    <p className="text-lg py-2 font-semibold text-start"><AiOutlineInstagram className='inline'/> @aberturasmarquez</p>
                    <p className="text-lg py-2 font-semibold text-start"><AiOutlineFacebook className='inline'/> Aberturas Marquez</p>
                </div>
            </div>
        </div>
    )
}

export default Nosotros