"use client";

import DoctorHeader from "../doctor/DoctorHeader";
import DoctorSidebar from "../doctor/DoctorSidebar";
function DoctorLayout({ children }) {
  return (
    <div className="min-h-screen bg-background overflow-hidden text-foreground dark">
      <div className="flex">
        <DoctorSidebar />
        <div className=" flex-1 w-full overflow-hidden">
          <DoctorHeader />
          <main className="transition-all duration-300 ease-in-out">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DoctorLayout;
