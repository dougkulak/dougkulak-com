import React from "react";
import { Box, Container, Typography } from "@mui/material";

export function Hero() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/img/bg-cover-mountain.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
        }}
        py={20}
        px={4}
      >
        <Container maxWidth={"md"}>
          <Typography variant="h1" color={"white"} textAlign={"center"}>
            Hi, I make{" "}
            <span
              style={{
                fontFamily: "Permanent Marker",
                color: "#ff9973",
                textShadow: "2px 2px 0px #FFFFFF",
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
