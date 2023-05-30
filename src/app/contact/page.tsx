"use client";

import HeaderTitle from "@/components/atoms/header-title/header-title";
import { Button, Container, Grid, TextField } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Container>
        <HeaderTitle
          title="Contact"
          subtitle="Cette page est créée avec Bootstrap."
        />
        <Grid container rowSpacing={3}>
          <Grid item sm={12}>
            <TextField id="name" label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField id="email" label="E-mail" variant="outlined" fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField
              id="subject"
              label="Subject"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item sm={12}>
            <Button variant="contained">Send</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
