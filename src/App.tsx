/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sidebar } from "./Sidebar";
import Keymetrics from "./Keymetrics";
// import { Navbar } from "./Navbar";
import TopStreamed from "./TopStreamed";
import UserGrowth from "./UserGrowth";
// import { useState } from "react";
import RevenueDistribution from "./RevenueDistribution";
import { RecentStreams } from "./RecentStreams";
import { UserProfileDesktop } from "./UserProfile";

function App() {
  // const [showSidebar, onSetShowSidebar] = useState(false);
  return (
    <div className="bg-white dark:bg-gray-950">
      <Sidebar />
      {/* <Navbar /> */}
      {/* // onSidebarHide={() => {
        //   onSetShowSidebar(false);
        // }}
        // showSidebar={showSidebar} */}
      <div className="relative lg:pl-72  w-full flex-1 overflow-hidden pt-2 md:pt-20 lg:pt-6 ">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          {/* <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 sm:hidden"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R5ipuuuuu6ja:"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-panel-left h-5 w-5"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">Toggle Menu</span>
            </button> */}
          <nav aria-label="breadcrumb" className="hidden md:flex">
            <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
              <li className="inline-flex items-center gap-1.5">
                <a className="transition-colors hover:text-foreground" href="#">
                  Dashboard
                </a>
              </li>
              <li
                role="presentation"
                aria-hidden="true"
                className="[&amp;>svg]:size-3.5"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <span
                  role="link"
                  aria-disabled="true"
                  aria-current="page"
                  className="font-normal text-foreground"
                >
                  Overview
                </span>
              </li>
            </ol>
          </nav>
          <div className="hidden lg:block relative ml-auto flex-1 md:grow-0 right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-search absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="search"
              className="text-card-foreground shadow-md flex h-9 border border-input px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
              placeholder="Search..."
              jf-ext-cache-id="0"
            />
          </div>
          <div className="w-56 hidden lg:block relative right-5">
            <UserProfileDesktop />
          </div>
          {/* <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 overflow-hidden rounded-full"
              type="button"
              id="radix-:Rhipuuuuu6ja:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <img
                alt="Avatar"
                loading="lazy"
                width="36"
                height="36"
                decoding="async"
                data-nimg="1"
                className="overflow-hidden rounded-full"
                // style="color:transparent"
                // srcset="/_next/image?url=%2Fplaceholder-user.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fplaceholder-user.jpg&amp;w=96&amp;q=75 2x"
                src="/_next/image?url=%2Fplaceholder-user.jpg&amp;w=96&amp;q=75"
              />
            </button> */}
        </header>

        <h1
          id="current-billing-cycle"
          className="pl-6 scroll-mt-10 p-2 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50"
        >
          Overview
        </h1>
        <Keymetrics />
        <section className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7 p-6 ">
          <RevenueDistribution />
          <UserGrowth />
          <RecentStreams />
          <TopStreamed />
        </section>
      </div>
    </div>
  );
}

export default App;
