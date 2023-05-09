"use client";

import HeaderTitle from "@/components/atoms/header-title/header-title";
import Menu from "@/components/molecules/menu/menu";

export default function Project({ params }) {
  return (
    <>
      <Menu currentPage="/projects" />
      <HeaderTitle title={`My Project ${params.id}`} />
    </>
  );
}
