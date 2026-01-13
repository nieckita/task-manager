import React from "react";

export default function Mainnavigation() {
  return (
    <>
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
    </>
  );
}
