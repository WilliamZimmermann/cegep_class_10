"use client";

import HeaderTitle from "@/components/atoms/header-title/header-title";
import { useTranslations } from "next-intl";

interface ProjectParams {
  id: string;
}

export default function Project({ params }: { params: ProjectParams }) {
  const t = useTranslations();

  return (
    <>
      <HeaderTitle title={`My Project ${params.id}`} />
    </>
  );
}
