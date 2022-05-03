import React from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export function Outro() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#c5c6c8",
        }}
        pt={10}
        pb={10}
        px={4}
      >
        <Container maxWidth={"md"}>
          <Typography
            variant="h3"
            color={"white"}
            textAlign={"center"}
            sx={{ typography: { md: "h1", sm: "h2", xs: "h3" } }}
          >
            Let's make{" "}
            <span
              style={{
                fontFamily: "Permanent Marker",
                color: "transparent",
                background: "linear-gradient(to right, #8360c3, #2ebf91)",
                webkitBackgroundClip: "text",
                fontSize: isMobile ? "3rem" : isTablet ? "6rem" : "9rem",
              }}
            >
              AWESOME
            </span>{" "}
            websites together.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
