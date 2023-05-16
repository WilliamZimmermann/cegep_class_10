import { Box } from "@mui/material";

export interface HeaderTitleProps {
  title: string;
  subtitle?: string;
}

export default function HeaderTitle(props: HeaderTitleProps) {
  return (
    <>
      <Box
        sx={{
          marginTop: 3,
        }}
      >
        <Box component="h1">{props.title}</Box>
        {props.subtitle && <p>{props.subtitle}</p>}
      </Box>
    </>
  );
}
