import React from "react";

export default function NextEvent() {
  return (
    <>
      <div className="glass-card rounded-[2.5rem] p-6">
        <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">
          Next Event
        </h3>
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center justify-center bg-primary-violet/10 border border-primary-violet/30 rounded-2xl px-3 py-2 min-w-12.5">
            <span className="text-[10px] font-bold text-primary-violet uppercase">
              Oct
            </span>
            <span className="text-xl font-bold">24</span>
          </div>
          <div>
            <h4 className="font-bold text-lg leading-tight">
              Product Sync Meeting
            </h4>
            <p className="text-white/40 text-sm mt-0.5">10:30 AM - 11:30 AM</p>
            <div className="flex -space-x-2 mt-3">
              <img
                alt="User"
                className="size-7 rounded-full border-2 border-[#12121A] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9eeGY25GnVEYCStLvi3HJ1y0ZC_h3gHooryU2MWhd4aCIC8ZRMYNw9J0u-NHdocKeaWsdv5LoI1lcMii5F90gxauw8aXBid98VoaCUmlOiLxeqxWuJoKl5LE60b5fDjRyPx_uwiG3duPsQe-0lV2m2Ril1sMKAhFdq6Nf-9QQKtjGHX7FSr5daIAqUYsaOff4eTq05NQKNbGAlpI9GriMPdccV36TMjUbHWAe5vPTZ-hBJA5I58I6co0Jx3xqnFd9PO5ODTIc_EuV"
              />
              <img
                alt="User"
                className="size-7 rounded-full border-2 border-[#12121A] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWiKMUSKA1vXoJ7OYcjodvhTcUu0qKoMVMe_1RcXgIAGlVaYlQDNip3VVymrsNnY24iJ8YlAJG6HzZHHuQKPYnNErOVjkyOHp5_eTXR10iYIwefpQ9UgqezosImbcWpDmChFTEJJj7H7fVGwYMAslXFC2PM5t5vLE_Zr2FcqtfixyLPgru5hcG4DaYd7qPH1Ap7qkASNDkLEfK0VH2NbhBy7DjZNpjIzhz6n2_TI4vo8U5p9HHEXzLU-GH6BRRaLK2e3wUYQ7UNokd"
              />
              <div className="size-7 rounded-full border-2 border-[#12121A] bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/80">
                +3
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
