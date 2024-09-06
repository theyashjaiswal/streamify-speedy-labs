// import Sidebar from "./Sidebar";
import Keymetrics from "./Keymetrics";
import { Navbar } from "./Navbar";
import TopStreamed from "./TopStreamed";
import UserGrowth from "./UserGrowth";
// import { useState } from "react";
import RevenueDistribution from "./RevenueDistribution";
function App() {
  // const [showSidebar, onSetShowSidebar] = useState(false);

  return (
    <div className="bg-gradient-to-r from-slate-900 to-indigo-900 overflow-clip p-2">
      <div className="flex justify-center gap-2 ">
        <Navbar />
        {/* <Sidebar
          onSidebarHide={() => {
            onSetShowSidebar(false);
          }}
          showSidebar={showSidebar}
        /> */}
        <div className="w-full mt-20">
          <h1
            id="current-billing-cycle"
            className="pl-6 scroll-mt-10 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50"
          >
            Overview
          </h1>
          <Keymetrics />
          <UserGrowth />
          <TopStreamed />
          <RevenueDistribution />
        </div>
      </div>
    </div>
  );
}

export default App;
