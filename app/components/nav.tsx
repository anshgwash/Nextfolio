import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/projects": { name: "Projects" },
  "/blog": { name: "Blog" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-black dark:hover:text-white flex align-middle relative px-3 py-2 rounded"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
