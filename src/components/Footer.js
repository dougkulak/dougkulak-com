import React from "react";
import { Box, Divider, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box p={3} pt={0}>
      <Box pb={1}>
        <Divider />
      </Box>
      <Typography fontSize="small">
        &copy; {new Date().getFullYear()} Doug Kulak &bull; dougkulak@gmail.com
        &bull; 530-500-2220
      </Typography>
    </Box>
  );
}
