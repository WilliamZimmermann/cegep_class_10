"use client";

import HeaderTitle from "@/components/atoms/header-title/header-title";
import { useTranslations } from "next-intl";

/* eslint-disable @next/next/no-img-element */
export default function About() {
  const t = useTranslations();

  return (
    <>
      <HeaderTitle title={t("about.page-title")} />
    </>
  );
}
