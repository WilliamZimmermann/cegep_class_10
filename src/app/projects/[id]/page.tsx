"use client";

import HeaderTitle from "@/components/atoms/header-title/header-title";

interface ProjectParams {
  id: string;
}

export default function Project({ params }: { params: ProjectParams }) {
  return (
    <>
      <HeaderTitle title={`My Project ${params.id}`} />
    </>
  );
}
