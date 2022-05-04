import React from "react";
import { Box, Container, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
      py={3}
      sx={{
        background: "#000",
        color: "#fff",
      }}
      textAlign={"center"}
    >
      <Container>
        <Typography fontSize="small">
          &copy; {new Date().getFullYear()} Doug Kulak &bull;
          dougkulak@gmail.com &bull; 530-500-2220
        </Typography>
      </Container>
    </Box>
  );
}
