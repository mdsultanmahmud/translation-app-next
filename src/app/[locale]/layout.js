import { notFound } from "next/navigation";
import "../globals.css";
import Provider from "./provider";
// Can be imported from a shared config
const locales = ["en", "bn", "ar"];

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
  return (
    <html lang={locale} data-theme="light">
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
