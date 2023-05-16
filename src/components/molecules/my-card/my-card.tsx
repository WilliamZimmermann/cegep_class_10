"use client";

import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

interface CardProps {
  title: string;
  imageSrc: string;
  content: string;
  buttonText: string;
  buttonUrl: string;
}

export default function MyCard(props: CardProps) {
  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={props.imageSrc}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={props.buttonUrl}>
            {props.buttonText}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
