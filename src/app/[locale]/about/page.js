import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  const t = useTranslations("About");
  const direc = t("dir");

  return (
    <>
      <Navbar />
      <div dir={direc}>
        <div className="mt-5">
          <h1 className="uppercase text-2xl">{t("title")}</h1>
          <p>{t("paragraph")}</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
