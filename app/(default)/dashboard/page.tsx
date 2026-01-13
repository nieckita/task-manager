import Header from "@/components/Header";
import Mainnavigation from "@/components/Mainnavigation";
import NextEvent from "@/components/Next_event/NextEvent";
import PriorityTasks from "@/components/Priority-Tasks/PriorityTasks";
import TodayProgress from "@/components/Today-Progress/TodayProgress";
import React from "react";

export default function Dashboeard() {
  return (
    <div className="bg-background-dark mesh-gradient font-display antialiased text-white min-h-screen selection:bg-primary-violet/30 overflow-x-hidden">
      <div className="orb orb-top-right "></div>
      <div className="orb orb-bottom-left"></div>
      <div className="relative flex min-h-screen w-full flex-col pb-44 z-10">
        <Header />
        <div className="px-6 space-y-6">
          <TodayProgress />
          <PriorityTasks />
          <NextEvent />
        </div>
        <Mainnavigation />
        <div className="ios-indicator"></div>
      </div>
    </div>
  );
}
