import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  const direc = t("dir");
  return (
    <>
      <div dir={direc}>
        <h1>{t("title")}</h1>
        <p>{t("paragraph")}</p>
      </div>
    </>
  );
}
