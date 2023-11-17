import { useTranslations } from "next-intl";
import Navbar from "./components/Navbar";

export default function Index() {
  const t = useTranslations("Index");
  const direc = t("dir");
  return (
    <>
      <Navbar />
      <div dir={direc}>
        <h1>{t("title")}</h1>
        <p>{t("paragraph")}</p>
      </div>
    </>
  );
}
