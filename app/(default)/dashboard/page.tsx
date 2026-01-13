import React from "react";

export function Dashboeard() {
  return (
    <div className="bg-background-dark mesh-gradient font-display antialiased text-white min-h-screen selection:bg-primary-violet/30 overflow-x-hidden">
      <div className="orb orb-top-right"></div>
      <div className="orb orb-bottom-left"></div>
      <div className="relative flex min-h-screen w-full flex-col pb-44 z-10">
        <header className="flex items-center justify-between px-6 pt-16 pb-4">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-full border-2 border-primary-violet/40 overflow-hidden glow-violet p-0.5">
              <img
                alt="Avatar"
                className="w-full h-full rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8-YVsAHOq5a0e31od3rZ_gLp9u34hwL2DHN0L6zi6YfOIrNPbHYek3LeIC8JRW_1zRvwrQQyiUUqZh8g2BInal_69rYCXYFKgLBOHb8P3wjSSNqtRjhAikHzqQsMgWDnwHOH3foBz9mZHUdixWb8RdIzGfRcIgV6wZiJyxRmKamqUjAb9P2Dp19BKmPJ3Py-VrEecMoYXvgkvbVMlyVQDHRV-fQWaUDUKh9vDfbrSApeIMs9N3kkYA4gMFDPd50UwhKdhiBMvB-we"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-white/50 text-base font-medium leading-none mb-1">
                Good Morning
              </p>
              <h1 className="text-2xl font-bold tracking-tight">
                Hello, Alex!
              </h1>
            </div>
          </div>
          <button className="size-12 rounded-full glass-card flex items-center justify-center relative">
            <span className="material-symbols-outlined text-white/80">
              notifications
            </span>
            <span className="absolute top-3 right-3.5 size-2.5 bg-neon-high rounded-full border-2 border-[#12121A]"></span>
          </button>
        </header>
        <div className="px-6 mb-6">
          <h2 className="text-lg font-medium text-white/90">Dashboard</h2>
        </div>
        <div className="px-6 space-y-6">
          <div className="glass-card rounded-[2.5rem] p-6 border-primary-violet/20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white/50 text-xs mb-1 uppercase tracking-widest font-bold">
                  Today's Progress
                </p>
                <h3 className="text-2xl font-bold">75% Complete</h3>
              </div>
              <div className="size-16 relative flex items-center justify-center">
                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                  <circle
                    className="stroke-white/10"
                    cx="18"
                    cy="18"
                    fill="none"
                    r="16"
                    stroke-width="3"
                  ></circle>
                  <circle
                    className="stroke-primary-violet"
                    cx="18"
                    cy="18"
                    fill="none"
                    r="16"
                    stroke-dasharray="100"
                    stroke-dashoffset="25"
                    stroke-linecap="round"
                    stroke-width="3"
                  ></circle>
                </svg>
                <span className="absolute text-xs font-bold">12/16</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 bg-white/5 rounded-2xl p-3 border border-white/5">
                <p className="text-white/40 text-[10px] uppercase font-bold mb-1">
                  To Do
                </p>
                <p className="text-lg font-bold">4</p>
              </div>
              <div className="flex-1 bg-white/5 rounded-2xl p-3 border border-white/5">
                <p className="text-white/40 text-[10px] uppercase font-bold mb-1">
                  In Review
                </p>
                <p className="text-lg font-bold">2</p>
              </div>
              <div className="flex-1 bg-primary-violet/20 rounded-2xl p-3 border border-primary-violet/20">
                <p className="text-primary-violet text-[10px] uppercase font-bold mb-1">
                  Done
                </p>
                <p className="text-lg font-bold">12</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest">
                Priority Tasks
              </h3>
              <span className="text-primary-violet text-xs font-bold">
                See All
              </span>
            </div>
            <div className="space-y-4">
              <div className="glass-card rounded-3xl p-5 flex items-center gap-4">
                <input className="custom-checkbox" type="checkbox" />
                <div className="size-11 rounded-2xl bg-neon-high/10 flex items-center justify-center border border-neon-high/20">
                  <span className="material-symbols-outlined text-neon-high text-xl">
                    campaign
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base leading-tight">
                    Q3 Strategy Review
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="size-1.5 rounded-full bg-neon-high"></span>
                    <p className="text-white/40 text-[11px] font-medium">
                      High Priority • Due 2h
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-white/20 text-xl">
                  chevron_right
                </span>
              </div>
              <div className="glass-card rounded-3xl p-5 flex items-center gap-4">
                <input className="custom-checkbox" type="checkbox" />
                <div className="size-11 rounded-2xl bg-primary-indigo/10 flex items-center justify-center border border-primary-indigo/20">
                  <span className="material-symbols-outlined text-primary-indigo text-xl">
                    palette
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base leading-tight">
                    UI Polish - TaskFlow
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="size-1.5 rounded-full bg-primary-indigo"></span>
                    <p className="text-white/40 text-[11px] font-medium">
                      Medium Priority • Due 5h
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-white/20 text-xl">
                  chevron_right
                </span>
              </div>
              <div className="glass-card rounded-3xl p-5 flex items-center gap-4">
                <input className="custom-checkbox" type="checkbox" />
                <div className="size-11 rounded-2xl bg-neon-low/10 flex items-center justify-center border border-neon-low/20">
                  <span className="material-symbols-outlined text-neon-low text-xl">
                    mail
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base leading-tight">
                    Client Onboarding
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="size-1.5 rounded-full bg-neon-low"></span>
                    <p className="text-white/40 text-[11px] font-medium">
                      Low Priority • Due Tomorrow
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-white/20 text-xl">
                  chevron_right
                </span>
              </div>
            </div>
          </div>
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
                <p className="text-white/40 text-sm mt-0.5">
                  10:30 AM - 11:30 AM
                </p>
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
        </div>
        <div className="nav-container">
          <div className="nav-bar-pill">
            <div className="floating-fab">
              <span className="material-symbols-outlined text-white text-3xl">
                add
              </span>
            </div>
            <button className="nav-item active">
              <span
                className="material-symbols-outlined text-[26px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                grid_view
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider">
                Dashboard
              </span>
            </button>
            <button className="nav-item">
              <span className="material-symbols-outlined text-[26px]">
                calendar_month
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider">
                Calendar
              </span>
            </button>
            <div className="w-16"></div>
            <button className="nav-item">
              <span className="material-symbols-outlined text-[26px]">
                bar_chart
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider">
                Insights
              </span>
            </button>
            <button className="nav-item">
              <span className="material-symbols-outlined text-[26px]">
                settings
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider">
                Settings
              </span>
            </button>
          </div>
        </div>
        <div className="ios-indicator"></div>
      </div>
    </div>
  );
}
