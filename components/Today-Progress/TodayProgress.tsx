import React from "react";

export default function TodayProgress() {
  return (
    <>
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
                className="stroke-Width/10"
                cx="18"
                cy="18"
                fill="none"
                r="16"
                strokeWidth="3"
              ></circle>
              <circle
                className="stroke-primary-violet"
                cx="18"
                cy="18"
                fill="none"
                r="16"
                strokeDasharray="100"
                strokeDashoffset="25"
                strokeLinecap="round"
                strokeWidth="3"
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
    </>
  );
}
