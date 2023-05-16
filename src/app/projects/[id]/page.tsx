"use client";

import HeaderTitle from "@/components/atoms/header-title/header-title";
import Menu from "@/components/molecules/my-menu/my-menu";

interface ProjectParams {
  id: string;
}

export default function Project({ params }: { params: ProjectParams }) {
  return (
    <>
      <Menu currentPage="/projects" />
      <HeaderTitle title={`My Project ${params.id}`} />
    </>
  );
}
