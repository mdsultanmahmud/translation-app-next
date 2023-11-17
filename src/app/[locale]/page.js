import { useTranslations } from "next-intl";
import Navbar from "./components/Navbar";

export default function Index() {
  const t = useTranslations("Index");
  const direc = t("dir");
  return (
    <>
      <Navbar />
      <div dir={direc}>
        <div className="border p-4 m-8 rounded-lg">
          <h1 className="uppercase font-semibold">{t("title")}</h1>
          <p>{t("paragraph")}</p>
        </div>
      </div>
    </>
  );
}
