"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { MyAppContext } from "@/context/my-app.provider";
import { Button, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

export default function ContactForm() {
  const myApp = useContext(MyAppContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(schema),
  });

  function onFormSubmit(data: ContactFormInputs) {
    console.log(data);
  }

  useEffect(() => {
    myApp.setName(watch("name"));
  }, [watch("name")]);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Grid container rowSpacing={3}>
        <Grid item sm={12}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={myApp.name}
            required
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register("name")}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            fullWidth
            required
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            id="subject"
            label="Subject"
            variant="outlined"
            fullWidth
            required
            error={!!errors.subject}
            helperText={errors.subject?.message}
            {...register("subject")}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            multiline
            fullWidth
            required
            error={!!errors.message}
            helperText={errors.message?.message}
            {...register("message")}
          />
        </Grid>
        <Grid item sm={12}>
          <Button variant="contained" type="submit" disabled={!isValid}>
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
