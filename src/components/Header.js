import React from "react";
import logo from "../logo-white.svg";
import { AppBar, Box, Container, Toolbar } from "@mui/material";

function Logo() {
  return (
    <Box pt={1} textAlign={"center"}>
      <img src={logo} alt="Doug Kulak" width="155" height="30" />
    </Box>
  );
}

export function Header() {
  return (
    <>
      <AppBar
        enableColorOnDark
        elevation={0}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: "center" }}>
            <Logo />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
