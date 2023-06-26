"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect } from "react";
import { ApplicationContext } from "@/context/application.provider";
import ContactProvider from "@/context/contact.provider";
import ContactForm from "@/components/organisms/contact-form";
import { useTranslations } from "next-intl";

const schema = yup
  .object({
    name: yup.string().min(2).max(20).required(),
    email: yup.string().email("This is not a valid e-mail.").required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const applicationContext = useContext(ApplicationContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ContactForm>({
    defaultValues: {
      name: applicationContext.name,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  function onFormSubmit(data: ContactForm) {
    applicationContext.setName(data.name);
  }

  useEffect(() => {
    applicationContext.setName(watch("name"));
  }, [watch("name")]);

  return (
    <>
      <ContactProvider>
        <ContactForm />
      </ContactProvider>
    </>
  );
}
