import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const translation = useTranslations("client");
  return <div className="text-center">{translation("footer")}</div>;
};

export default Footer;
