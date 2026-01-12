/**
 * @file page.tsx
 * @description Die Willkommensseite (Landing Page) der TaskFlow-Anwendung.
 */

import React from "react";
import Link from "next/link";

export default function WelcomePage() {
  return (
    // Hauptcontainer: Zentriert den Inhalt und füllt den gesamten Bildschirm (Viewport)
    <div className="relative flex flex-col items-center justify-between min-h-screen p-8 overflow-hidden bg-[#0F0F1A]">
      {/* Hintergrund-Effekte: Große, weiche Lichtkugeln (Orbs) für das visuelle Design */}
      {/* Oberer violetter Orb */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-200 h-200 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      {/* Unterer indigo-farbener Orb */}
      <div className="absolute bottom-[-10%] right-[-5%] w-150 h-150 bg-indigo-custom/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Hero-Sektion: Enthält das Logo und den Titel der Anwendung */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-2xl">
        <div className="relative mb-12 group">
          {/* Dynamisches Glühen hinter dem Logo bei Hover-Effekt */}
          <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>

          {/* Logo-Container mit Glassmorphism-Effekt */}
          <div className="relative size-32 md:size-40 bg-linear-to-br from-indigo-500/20 to-violet-500/20 rounded-[2.5rem] flex items-center justify-center border border-violet-400/30 backdrop-blur-2xl shadow-2xl">
            <span className="material-symbols-outlined text-white text-7xl md:text-10xl  select-none">
              bolt
            </span>
          </div>
        </div>

        {/* Text-Inhalte mit Responsive Design für Desktop und Mobile */}
        <div className="text-center space-y-6">
          <h1 className="text-white tracking-tighter text-6xl md:text-7xl font-black">
            Task<span className="text-primary">Flow</span>
          </h1>
          <p className="text-white/60 text-xl md:text-2xl font-medium max-w-md mx-auto leading-relaxed">
            Meistern Sie Ihre Produktivität mit Eleganz.
          </p>
        </div>
      </div>

      {/* Interaktions-Bereich: Buttons für Navigation (Sign-In und Sign-Up) */}
      <div className="relative z-10 w-full max-w-sm pb-16 space-y-6">
        {/* Haupt-Button mit Gradienten-Effekt */}
        <Link
          href="./signIn"
          className="btn-gradient w-full h-16 md:h-20 text-xl font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
        >
          <span className="text-amber-50">Get Started</span>
          <span className="material-symbols-outlined text-2xl text-amber-50">
            arrow_forward
          </span>
        </Link>

        {/* Link zur Login-Seite */}
        <div className="text-center">
          <p className="text-white/40 text-lg">
            Haben Sie bereits kein Konto?
            <Link
              href="./signUp"
              className="text-primary font-bold ml-1 hover:underline"
            >
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Visueller Indikator für mobile Endgeräte */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full"></div>
    </div>
  );
}
