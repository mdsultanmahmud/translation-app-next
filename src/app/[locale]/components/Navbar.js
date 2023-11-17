"use client";
import { Link, usePathname, useRouter } from "@/src/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
const Navbar = () => {
  const routes = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const changeLanguage = (value) => {
    localStorage.setItem(
      "routes",
      JSON.stringify({ routes: routes, locale: value })
    );
    const cngLocale = JSON.parse(localStorage.getItem("routes"));
    router.replace(cngLocale.routes, { locale: cngLocale.locale });
  };
  return (
    <div className="h-[80px] bg-primaryCol text-white font-semibold grid place-items-center">
      <div className="flex items-center gap-x-2 ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <div>
          <select
            className="bg-primaryCol px-2 outline-none border py-1"
            onChange={(e) => {
              changeLanguage(e.target.value);
            }}
          >
            <option value={"en"}>Select an option</option>
            <option value={"en"}>English</option>
            <option value={"bn"}>Bangla</option>
            <option value={"ar"}>Arabic</option>
          </select>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="bg-[#9DB2BF] rounded-lg">
            <button
              onClick={() => setTheme("light")}
              className={`text-xs font-semibold uppercase ${
                theme === "light"
                  ? "bg-white text-black"
                  : "transparent text-white"
              } text-black py-2 px-4 rounded-lg`}
            >
              light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`text-xs font-semibold uppercase ${
                theme === "dark" ? "bg-[#0E2954]" : "transparent text-white"
              }  text-white py-2 px-4 rounded-lg`}
            >
              dark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
