import HeaderTitle from "@/components/atoms/header-title/header-title";
import Menu from "@/components/molecules/menu/menu";

/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <>
      <Menu currentPage="/about" />
      <HeaderTitle title="About" />
    </>
  );
}
