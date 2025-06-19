import Footer from "@/components/client/Footer";
import Header from "@/components/client/Header";
import ClientLayout from "@/components/layout/ClientLayout";
import { Button } from "@/components/ui/button";
import { AbstractIntlMessages, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const message: AbstractIntlMessages = await getMessages({ locale });
  const title = message.appName;
  return {
    title,
  };
}

export default function Home() {
  const translation = useTranslations("client")
  return (
    <>
    <ClientLayout>
      <Header></Header>
      <div className="p-4 flex  gap-2 justify-center items-center w-3xs mx-auto">
        <Button className="w-50" variant="default">{translation("button")}</Button>
        <Button className="w-50" variant="link">{translation("button")}</Button>
        <Button className="w-50" variant="destructive">{translation("button")}</Button>
        <Button className="w-50" variant="ghost">{translation("button")}</Button>
      </div>
      <Footer></Footer>
    </ClientLayout>
    </>
  );
}
