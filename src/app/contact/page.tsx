"use client";

import HeaderTitle from "@/components/atoms/header-title/header-title";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ContactForm>({ mode: "onBlur", resolver: yupResolver(schema) });

  function onFormSubmit(data: ContactForm) {
    console.log(data);
  }

  return (
    <>
      <Container>
        <HeaderTitle
          title="Contact"
          subtitle="Cette page est créée avec Material UI."
        />
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Grid container rowSpacing={3}>
            <Grid item sm={12}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                required
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                required
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="subject"
                label="Subject"
                variant="outlined"
                fullWidth
                {...register("subject")}
                error={!!errors.subject}
                helperText={errors.subject?.message}
                required
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="message"
                label="Message"
                variant="outlined"
                multiline
                fullWidth
                {...register("message")}
                error={!!errors.message}
                helperText={errors.message?.message}
                required
              />
            </Grid>
            <Grid item sm={12}>
              <Button variant="contained" type="submit" disabled={!isValid}>
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
