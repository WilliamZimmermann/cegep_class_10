"use client";

import HeaderTitle from "@/components/atoms/header-title/header-title";
import ContactForm from "@/components/molecules/contact-form/contact-form";
import { Container } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Container>
        <HeaderTitle
          title="Contact"
          subtitle="Cette page est créée avec MUI."
        />
        <ContactForm />
      </Container>
    </>
  );
}
