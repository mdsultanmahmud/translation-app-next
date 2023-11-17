import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  const t = useTranslations("About");
  const direc = t("dir");

  return (
    <>
      <Navbar />
      <div dir={direc}>
        <h1>{t("title")}</h1>
        <p>{t("paragraph")}</p>
        <p>{t("text")}</p>
      </div>
    </>
  );
};

export default AboutPage;
