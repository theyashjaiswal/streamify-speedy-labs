import { Sidebar } from "./Sidebar";
import Keymetrics from "./Keymetrics";
// import { Navbar } from "./Navbar";
import TopStreamed from "./TopStreamed";
import UserGrowth from "./UserGrowth";
// import { useState } from "react";
import RevenueDistribution from "./RevenueDistribution";
function App() {
  // const [showSidebar, onSetShowSidebar] = useState(false);

  return (
    <div className="bg-gray-950 overflow-y-hidden">
      <div className="mx-auto max-w-screen-2xl">
        {/* <Navbar /> */}
        <Sidebar />
        {/* // onSidebarHide={() => {
        //   onSetShowSidebar(false);
        // }}
        // showSidebar={showSidebar} */}
        <div className="lg:pl-96 mt-[4rem] lg:mt-6">
          <h1
            id="current-billing-cycle"
            className="pl-6 scroll-mt-10 p-2 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50"
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
