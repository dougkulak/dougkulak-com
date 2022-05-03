import React from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export function Hero() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#c5c6c8",
          backgroundImage: "url('/img/bg-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
        }}
        pt={10}
        pb={isMobile ? 30 : isTablet ? 50 : 70}
        px={4}
      >
        <Container maxWidth={"md"}>
          <Typography
            variant="h1"
            color={"white"}
            textAlign={"center"}
            sx={{ typography: { md: "h1", sm: "h2", xs: "h3" } }}
          >
            Hi, I make{" "}
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
            websites.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
