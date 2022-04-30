import React from "react";
import { Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export function Resume() {
  return (
    <>
      <Box
        py={2}
        sx={{
          textAlign: "center",
          color: "white",
        }}
      >
        <Button
          href="/resume.pdf"
          target={"_blank"}
          rel={"noopener"}
          variant={"outlined"}
          color={"inherit"}
          startIcon={<DownloadIcon />}
        >
          Download Resume (PDF)
        </Button>
      </Box>
    </>
  );
}
