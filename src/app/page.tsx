"use client";

import Image from "next/image";

import Head from 'next/head';

export default function LandingPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lare - In Arrivo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <style jsx global>{`
          body {
            font-family: 'Inter', sans-serif;
          }
          .font-serif-display {
            font-family: 'Playfair Display', serif;
          }
          .bg-pattern {
            background-color: #f8f7f4;
            opacity: 0.8;
            background-image:  linear-gradient(#9B1C1C 1px, transparent 1px), linear-gradient(to right, #9B1C1C 1px, #f8f7f4 1px);
            background-size: 20px 20px;
          }
        `}</style>
      </Head>

      <div className="bg-[#f8f7f4] text-[#1A2B42] flex items-center justify-center min-h-screen p-4">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>

        <main className="w-full max-w-2xl text-center z-10">

          {/* Logo */}
          <div className="mb-24 flex justify-center items-center w-full mx-auto">
            <Image src="/logo.png" alt="Logo Lare" width={200} height={200} className="size-60 object-contain" />
          </div>

          {/* Título Principal */}
          <h1 className="font-serif-display text-4xl md:text-6xl font-bold text-[#1A2B42] leading-tight">
            La gestione immobiliare sta per cambiare.
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            Lare è la piattaforma digitale che restituisce tranquillità e controllo ai proprietari di casa. Stiamo costruendo un guardiano digitale per il tuo patrimonio.
          </p>

          {/* Formulário de Captura de Email com Formspree */}
          <div className="mt-12">
            <p className="mb-4 font-semibold">Sii tra i primi a scoprirlo.</p>
            <form
              className="flex flex-col sm:flex-row justify-center max-w-md mx-auto"
              action="https://formspree.io/f/mrbkwdoa"
              method="POST"
            >
                <input
                    type="email"
                    name="email" // O atributo 'name' é essencial para o Formspree
                    placeholder="Il tuo indirizzo email"
                    required
                    className="w-full sm:w-auto flex-grow px-4 py-3 mb-2 sm:mb-0 sm:mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <button
                    type="submit"
                    className="bg-[#9B1C1C] text-white font-bold px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                >
                    Rimani Aggiornato
                </button>
            </form>
          </div>

          {/* Rodapé */}
          <footer className="mt-16">
            <p className="text-sm text-gray-500">&copy; 2025 Lare.homes - Tutti i diritti riservati.</p>
          </footer>

        </main>
      </div>
    </>
  );
}
