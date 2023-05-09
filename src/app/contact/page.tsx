import HeaderTitle from "@/components/atoms/header-title/header-title";
import Menu from "@/components/molecules/menu/menu";

export default function Contact() {
  return (
    <>
      <Menu currentPage="/contact" />
      <HeaderTitle
        title="Contact"
        subtitle="Cette page est créée avec Bootstrap."
      />
    </>
  );
}
