'use client';

import Navbar from './Navbar';
import Footer from './Footer';

export default function FavouriteLayout({ children, title }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <section className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4 text-center text-white">{title}</h1>
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
}
