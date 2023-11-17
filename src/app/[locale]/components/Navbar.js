"use client";
import { Link, usePathname, useRouter } from "@/src/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const routes = usePathname();
  const router = useRouter();
  const [defaultValue, setDefaultValue] = useState(null);
  const [status, setStatus] = useState(false);
  const changeLanguage = (value) => {
    localStorage.setItem(
      "routes",
      JSON.stringify({ routes: routes, locale: value })
    );
    const cngLocale = JSON.parse(localStorage.getItem("routes"));
    router.replace(cngLocale.routes, { locale: cngLocale.locale });
    setDefaultValue(cngLocale.locale);
    // console.log(cngLocale);
  };
  useEffect(() => {
    const cngLocale = JSON.parse(localStorage.getItem("routes"));
    setDefaultValue(cngLocale.locale);
  }, []);
  // console.log("default check value", defaultValue);
  return (
    <div className="h-[80px] bg-primaryCol text-white font-semibold grid place-items-center">
      <div className="flex items-center gap-x-2 ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {defaultValue && (
          <div>
            <select
              className="bg-primaryCol px-2 outline-none border py-1"
              onChange={(e) => {
                changeLanguage(e.target.value);
              }}
            >
              {/* <option value={"en"}>Select an option</option> */}
              <option value={"en"} defaultChecked={defaultValue == "en"}>
                English
              </option>
              <option value={"bn"} defaultChecked={defaultValue == "bn"}>
                Bangla
              </option>
              <option value={"ar"} defaultChecked={defaultValue == "ar"}>
                Arabic
              </option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
