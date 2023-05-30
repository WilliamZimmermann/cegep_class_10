import { MyAppContext } from "@/context/my-app.provider";
import { Button, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const myApp = useContext(MyAppContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormInputs>();

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
            {...register("name")}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            fullWidth
            {...register("email")}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            id="subject"
            label="Subject"
            variant="outlined"
            fullWidth
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
            {...register("message")}
          />
        </Grid>
        <Grid item sm={12}>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
