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
        <h1>{t("title")}</h1>
        <p>{t("paragraph")}</p>
        <Link href={"/en/about"}>About</Link>
      </div>
    </>
  );
};

export default ContactPage;
