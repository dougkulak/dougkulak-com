import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box, Toolbar } from "@mui/material";

function MainContent({ children }) {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </>
  );
}

export function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <MainContent>
        {children} <Footer />
      </MainContent>
    </Box>
  );
}
