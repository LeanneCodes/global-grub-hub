'use client';

import Navbar from './Navbar';
import Footer from './Footer';

export default function CuisineLayout({ children, title, description, image }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <section className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
            <img src={image} alt={title} className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" />
            <div className="text-center md:text-left md:flex md:flex-col md:justify-center md:w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
              <p className="text-lg text-gray-200">{description}</p>
            </div>
          </div>
          <div id="recipe-list" className="space-y-4 mt-8">
            <hr className='border-white' />
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
