import React from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import logoIcon from "../logo-icon-white.svg";

export function Hero() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const iconSize = isMobile ? 100 : isTablet ? 200 : 400;

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
          <Box sx={{ textAlign: "center", marginTop: 10 }}>
            <img src={logoIcon} width={iconSize} height={iconSize} alt={"DK"} />
          </Box>
        </Container>
      </Box>
    </>
  );
}
