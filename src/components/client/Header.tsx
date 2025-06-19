"use client"
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const [locale, setLocale] = React.useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh();
  };

  const translate = useTranslations("client");
  return (
    <div className="flex justify-between items-center p-2 mb-1">
      <div>Logo</div>
      <div>
        {translate("header")}
      </div>
      <div className="flex gap-y-2">
        <Button variant="ghost" onClick={() => changeLocale("en")}>EN</Button>
        <Button variant="ghost" onClick={() => changeLocale("fr")}>FR</Button>
        <Button variant="ghost" onClick={() => changeLocale("vi")}>VI</Button>
      </div>
    </div>
  );
};

export default Header;
