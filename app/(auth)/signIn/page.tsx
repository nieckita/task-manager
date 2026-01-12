"use client";
import Link from "next/link";
import { verifyUser } from "../actions";
import { useState } from "react";

export default function signIn() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  async function handleSubmit(formData: FormData) {
    const result = await verifyUser(formData);
    if (result.message) {
      setErrorMessage(result.message);
    } else if (result.sucssess) {
      window.location.href = "/dashboard";
    }
  }
  return (
    <div>
      <div>
        <h1 className="text-white tracking-tight text-4xl font-extrabold text-center mb-1">
          TaskFlow
        </h1>
        <p className="text-white/50 text-sm font-medium text-center">
          Master your daily progress
        </p>
      </div>
      <div className="glass-card rounded-4xl p-8 w-full">
        <form action={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-white/90 text-xs font-bold uppercase tracking-wider ml-1">
              Email Address
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-xl">
                mail
              </span>
              <input
                name="email"
                className="w-full rounded-xl text-white bg-white/5 border border-violet-500/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 h-14 pl-12 pr-4 text-base transition-all outline-none"
                placeholder="name@example.com"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-white/90 text-xs font-bold uppercase tracking-wider ml-1">
                Password
              </label>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2  text-gray-500  text-xl ">
                lock
              </span>
              <input
                name="password"
                className="w-full rounded-xl text-white bg-white/5 border border-violet-500/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 h-14 pl-12 pr-12 text-base transition-all outline-none"
                placeholder="••••••••"
                type="password"
              />

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-xl text-gray-500 p-1">
                  visibility
                </span>
              </button>
            </div>
            <div className="text-right">
              <Link
                className="text-violet-400 hover:text-violet-300 text-xs font-semibold transition-colors"
                href="#"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-400 text-sm font-medium text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20">
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            className="btn-gradient w-full h-14
               md:h-14 text-amber-50 text-xl font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
          >
            <span className="text-amber-50">Sign In</span>
            <span className="material-symbols-outlined text-2xl text-amber-50">
              arrow_forward
            </span>
          </button>
        </form>
      </div>
      <div className="mt-10 text-center">
        <p className="text-white/40 text-sm font-medium">
          Haben Sie bereits kein Konto?
          <Link
            className="text-violet-400 font-bold ml-1 hover:text-violet-300 transition-colors"
            href="./signUp"
          >
            Sign Up
          </Link>
        </p>
      </div>
      <div className="h-8"></div>
    </div>
  );
}
