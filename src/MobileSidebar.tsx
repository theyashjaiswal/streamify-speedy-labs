import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../src/components/Drawer";
import { Button } from "./components/Button";
import {
  RiHome2Line,
  RiLinkM,
  RiListCheck,
  RiMenuLine,
  RiSettings5Line,
} from "@remixicon/react";

const navigation = [
  { name: "Overview", href: "#", icon: RiHome2Line },
  { name: "Details", href: "#", icon: RiListCheck },
  {
    name: "Settings",
    href: "#",
    icon: RiSettings5Line,
  },
] as const;

const shortcuts = [
  { name: "Go to Top 100 Global Artists", href: "#", icon: RiLinkM },
] as const;

export default function MobileSidebar() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          aria-label="open sidebar"
          className="group flex items-center rounded-md p-2 text-sm font-medium hover:bg-gray-100 data-[state=open]:bg-gray-100 data-[state=open]:bg-gray-400/10 hover:dark:bg-gray-400/10"
        >
          <RiMenuLine
            className="size-6 shrink-0 sm:size-5"
            aria-hidden="true"
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-lg">
        <DrawerHeader>
          <DrawerTitle>Streamify - Speedy Labs</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <nav
            aria-label="core mobile navigation links"
            className="flex flex-1 flex-col space-y-10 text-black dark:text-white"
          >
            <ul role="list" className="space-y-1.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <DrawerClose asChild>
                    <a
                      // href={item.href}
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50 flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-base font-medium transition hover:bg-gray-100 sm:text-sm hover:dark:bg-gray-900"
                    >
                      <item.icon
                        className="size-5 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </DrawerClose>
                </li>
              ))}
            </ul>
            <div>
              <span className="text-sm font-medium leading-6 text-gray-500 sm:text-xs">
                Shortcuts
              </span>
              <ul aria-label="shortcuts" role="list" className="space-y-0.5">
                {shortcuts.map((item) => (
                  <li key={item.name}>
                    <a
                      // href={item.href}
                      className="text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50 flex items-center gap-x-2.5 rounded-md px-2 py-1.5 font-medium transition hover:bg-gray-100 sm:text-sm hover:dark:bg-gray-900"
                    >
                      <item.icon
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
