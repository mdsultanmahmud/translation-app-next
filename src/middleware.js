import createMiddleware from "next-intl/middleware";

import { locales } from "./navigation";
export default createMiddleware({
  // A list of all locales that are supported
  // locales: ["en", "bn", "ar"],
  // Used when no locale matches
  defaultLocale: "en",
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|bn|ar)/:path*"],
};
