import React from "react";

export default function PriorityTasks() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest">
            Priority Tasks
          </h3>
          <span className="text-primary-violet text-xs font-bold">See All</span>
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
    </>
  );
}
