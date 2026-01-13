import Link from "next/link";
import { useAuthForm } from "@/lib/hook/helpers";
export default function Header() {
  return (
    <>
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
            <h1 className="text-2xl font-bold tracking-tight">Hello, Alex!</h1>
          </div>
        </div>
        <button className="size-12 rounded-full glass-card flex items-center justify-center relative">
          <span className="material-symbols-outlined text-white/80">
            notifications
          </span>
          <span className="absolute top-3 right-1/5 -translate-x-1/4  size-2.5 bg-red-600   rounded-full border-2 border-[#ff0202] "></span>
        </button>
      </header>
      <div className="px-6 mb-6">
        <h2 className="text-lg font-medium text-white/90">Dashboard</h2>
      </div>
    </>
  );
}
