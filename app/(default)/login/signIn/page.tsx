import Link from "next/link";

export default function signIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6 relative">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-200 h-200 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      {/* Unterer indigo-farbener Orb */}
      <div className="absolute bottom-[-10%] right-[-5%] w-150 h-150 bg-indigo-custom/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-95">
        <div className="flex flex-col items-center mb-12">
          <div className="size-20 bg-linear-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center border border-violet-500/30 mb-6 logo-glow">
            <span className="material-symbols-outlined text-white text-[52px] fill-1">
              bolt
            </span>
          </div>
          <h1 className="text-white tracking-tight text-4xl font-extrabold text-center mb-1">
            TaskFlow
          </h1>
          <p className="text-white/50 text-sm font-medium text-center">
            Master your daily progress
          </p>
        </div>
        <div className="glass-card rounded-4xl p-8 w-full">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-white/90 text-xs font-bold uppercase tracking-wider ml-1">
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-xl">
                  mail
                </span>
                <input
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
            <Link
              href="/login/signIn"
              className="btn-gradient w-full h-16 md:h-20 text-xl font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
            >
              <span className="text-amber-50">Sign In</span>
              <span className="material-symbols-outlined text-2xl text-amber-50">
                arrow_forward
              </span>
            </Link>
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
    </div>
  );
}
