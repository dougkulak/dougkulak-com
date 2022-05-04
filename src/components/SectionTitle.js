import React from "react";
import { Typography } from "@mui/material";

export function SectionTitle({ children }) {
  return (
    <Typography variant="h3" gutterBottom sx={{ pb: 6 }} textAlign={"center"}>
      {children}
    </Typography>
  );
}
