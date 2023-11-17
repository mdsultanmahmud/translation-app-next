import { useTranslations } from "next-intl";
import Link from "next/link";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  const t = useTranslations("Contact");
  const direc = t("dir");
  return (
    <>
      <Navbar />
      <div dir={direc}>
        <div className="mt-5">
          <h1 className="text-2xl uppercase">{t("title")}</h1>
          <p>{t("paragraph")}</p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
