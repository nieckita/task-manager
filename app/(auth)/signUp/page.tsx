"use client";
import { useAuthForm } from "@/lib/hook/helpers";
import Link from "next/link";
import { createUser } from "../actions";

export default function signIn() {
  const { handleSubmit, errorMessage, isPending, setErrorMessage } =
    useAuthForm(createUser, "/signIn");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await handleSubmit(formData);
  };
  return (
    <>
      <div>
        <h1 className="text-white tracking-tight text-4xl font-extrabold text-center mb-1">
          Create Account
        </h1>
        <p className="text-white/50 text-sm font-medium text-center">
          Join TaskFlow today
        </p>
      </div>
      <div className="glass-card rounded-[2.5rem] p-8 w-full">
        <form action={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-white/90 text-[10px] font-bold uppercase tracking-widest ml-1">
              Full Name
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-xl">
                person
              </span>
              <input
                name="name"
                className="w-full rounded-xl text-white bg-white/5 border border-violet-500/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 h-14 pl-12 pr-4 text-base transition-all outline-none focus:placeholder-transparent"
                placeholder="John Doe"
                type="text"
                onFocus={() => setErrorMessage(null)}
                onChange={() => setErrorMessage(null)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-white/90 text-[10px] font-bold uppercase tracking-widest ml-1">
              Email Address
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-xl">
                mail
              </span>
              <input
                name="email"
                className=" w-full rounded-xl text-white bg-white/5 border border-violet-500/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 h-14 pl-12 pr-4 text-base transition-all outline-none focus:placeholder-transparent"
                placeholder="name@example.com"
                type="email"
                onFocus={() => setErrorMessage(null)}
                onChange={() => setErrorMessage(null)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-white/90 text-[10px] font-bold uppercase tracking-widest ml-1">
              Password
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-5 -translate-0.5 text-gray-400 text-xl">
                lock
              </span>
              <input
                name="password"
                className="w-full rounded-xl text-white bg-white/5 border border-violet-500/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 h-14 pl-12 pr-12 text-base transition-all outline-none focus:placeholder-transparent"
                placeholder="**********"
                type="password"
                onFocus={() => setErrorMessage(null)}
                onChange={() => setErrorMessage(null)}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
              />
              <label className="text-yellow-400 text-[7px] font-bold uppercase tracking-widest ml-1">
                Mind. 8 Zeichen, inkl. Groß- & Kleinschreibung und Zahlen.
              </label>
              <button
                className="absolute right-4 top-5 -translate-0.5 text-white/30 hover:text-white transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-xl text-gray-400">
                  visibility
                </span>
              </button>
            </div>
          </div>
          <div className="pt-2">
            <button className="w-full h-14 btn-gradient text-white text-lg font-bold rounded-xl transition-transform active:scale-95 flex items-center justify-center gap-2 group">
              <span>Sign Up</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 text-center">
        <p className="text-white/40 text-sm font-medium">
          Haben Sie bereits ein Konto?
          <Link
            className="text-violet-400 font-bold ml-1 hover:text-violet-300 transition-colors"
            href="./signIn"
          >
            Sign In
          </Link>
        </p>
      </div>
      <div className="h-6"></div>
    </>
  );
}
