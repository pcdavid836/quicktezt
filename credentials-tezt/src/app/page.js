import React from 'react'
import Link from 'next/link';
import "./style.css";

function Homepage() {
  return (
    <div id="webcrumbs">
      <div className='w-full bg-white shadow-lg rounded-lg flex items-center justify-center'>
        <nav className='w-full flex justify-between items-center p-4 bg-neutral-100'>
          <div className='flex items-center'>
            <span className='material-symbols-outlined text-primary-950 text-2xl'>home</span>
            <h1 className='font-title text-primary-950 text-xl ml-3'>MyPage</h1>
          </div>
          <ul className='flex gap-6'>
            <li><a href='#' className='text-primary-950'>Menu</a></li>
            <li><a href='#' className='text-primary-950'>Acerca de</a></li>
            <li><a href='#' className='text-primary-950'>Servicios</a></li>
            <li><a href='#' className='text-primary-950'>Contacto</a></li>
          </ul>
          <div className='flex gap-4 items-center'>
            <a href='#' className='text-primary-950'>
              <i className='fa-brands fa-facebook text-xl'></i>
            </a>
            <a href='#' className='text-primary-950'>
              <i className='fa-brands fa-twitter text-xl'></i>
            </a>
            <Link href={'/auth/login'}> 
            <button className='bg-primary-500 text-primary-50 rounded-md px-4 py-2'>
              Iniciar Sesion
            </button>
            </Link>
          </div>
        </nav>
      </div>
      <div id="webcrumbs">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-[1200px] bg-white rounded-lg shadow-lg min-h-[800px] mx-auto">
            <header className="bg-primary-500 py-6 px-8 text-primary-50">
              <h1 className="text-4xl font-title">Bienvenid@ a nuestro sitio</h1>
            </header>

            <section className="p-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2">
                  <p className="text-neutral-950 leading-relaxed text-lg">
                  Descubra nuestra gama de productos, servicios y más. Nos esforzamos por ofrecer las mejores soluciones para sus necesidades. Explore a continuación para obtener más información.
                  </p>
                </div>
                <div className="col-span-1">
                  <img
                    src="https://tools-api.webcrumbs.org/image-placeholder/600/400/nature/1"
                    alt="Nature"
                    className="w-full h-[250px] object-cover rounded-md"
                  />
                </div>
              </div>
            </section>

            <section className="bg-neutral-100 p-8">
              <h2 className="text-3xl font-title text-neutral-950 mb-4">Notas!</h2>
              <div className="flex gap-6">
                <div className="basis-1/3 p-4 bg-white rounded-md shadow">
                  <h3 className="text-xl text-primary-950">Nota 1</h3>
                  <p className="mt-2 text-neutral-700">Ejemplo de nota 1.</p>
                </div>
                <div className="basis-1/3 p-4 bg-white rounded-md shadow">
                  <h3 className="text-xl text-primary-950">Nota 2</h3>
                  <p className="mt-2 text-neutral-700">Ejemplo de nota 2.</p>
                </div>
                <div className="basis-1/3 p-4 bg-white rounded-md shadow">
                  <h3 className="text-xl text-primary-950">Nota 3</h3>
                  <p className="mt-2 text-neutral-700">Ejemplo de nota 3.</p>
                </div>
              </div>
            </section>

            <section className="p-8">
              <h2 className="text-3xl font-title text-neutral-950 mb-4">Ver mas</h2>
              <div className="flex gap-6">
                <img
                  src="https://tools-api.webcrumbs.org/image-placeholder/600/400/travel/1"
                  alt="Travel"
                  className="w-[300px] h-[200px] object-cover rounded-md"
                />
                <img
                  src="https://tools-api.webcrumbs.org/image-placeholder/600/400/city/1"
                  alt="City"
                  className="w-[300px] h-[200px] object-cover rounded-md"
                />
                <img
                  src="https://tools-api.webcrumbs.org/image-placeholder/600/400/food/1"
                  alt="Food"
                  className="w-[300px] h-[200px] object-cover rounded-md"
                />
              </div>
            </section>

            <footer className="bg-primary-500 py-6 px-8 text-primary-50 text-center rounded-b-lg">
              <p>&copy; 2029 SOS. Todos los derechos reservados.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage