import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import logoIcon from "../logo-icon.svg";
import DownloadIcon from "@mui/icons-material/Download";

export function Contact() {
  return (
    <>
      <SectionTitle>Contact</SectionTitle>

      <Grid container mb={1}>
        <Grid
          item
          xs={12}
          sm={4}
          pr={2}
          justifyContent={"center"}
          textAlign={"center"}
          alignSelf={"center"}
        >
          <Typography variant={"subtitle1"}>dougkulak@gmail.com</Typography>
          <Typography variant={"h6"}>(530) 500-2220</Typography>
          <Typography variant={"caption"}>
            Monday-Friday, 9AM-5PM PST
          </Typography>
          <br />
          <Typography variant={"caption"}>Redding, California</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          justifyContent={"center"}
          textAlign={"center"}
          sx={{
            display: { xs: "none", sm: "flex", md: "flex" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              padding: 3,
              transition: "background-color .35s",
              "&:hover": {
                backgroundColor: "rgba(180,180,180,0.25)",
              },
              "&:hover::before": {
                opacity: 1,
                transform: "scale(1)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: "10px",
                right: "10px",
                bottom: "10px",
                left: "10px",
                transform: "scale(0,1)",
                borderTop: "2px solid #333",
                borderBottom: "2px solid #333",
                opacity: 0,
                transition: "transform .35s,opacity .35s",
              },
              "&:hover::after": {
                opacity: 1,
                transform: "scale(1)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: "10px",
                right: "10px",
                bottom: "10px",
                left: "10px",
                transform: "scale(1,0)",
                borderRight: "2px solid #333",
                borderLeft: "2px solid #333",
                opacity: 0,
                transition: "transform .35s,opacity .35s",
              },
            }}
          >
            <img src={logoIcon} width={90} alt={"DK"} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          justifyContent={"center"}
          textAlign={"center"}
          sx={{
            paddingTop: { xs: 2, sm: 0, md: 0 },
          }}
        >
          <Stack direction="row" spacing={1} my={1} justifyContent={"center"}>
            <GitHubIcon />
            <Link
              href="https://github.com/dougkulak"
              target={"_blank"}
              rel={"noopener"}
            >
              dougkulak
            </Link>
          </Stack>
          <Stack direction="row" spacing={1} my={1} justifyContent={"center"}>
            <LinkedInIcon />
            <Link
              href="https://linkedin.com/in/dougkulak"
              target={"_blank"}
              rel={"noopener"}
            >
              dougkulak
            </Link>
          </Stack>
          <Stack direction="row" spacing={1} my={1} justifyContent={"center"}>
            <TwitterIcon />
            <Link
              href="https://twitter.com/dougkulak"
              target={"_blank"}
              rel={"noopener"}
            >
              dougkulak
            </Link>
          </Stack>
          <Stack direction="row" spacing={1} my={1} justifyContent={"center"}>
            <InstagramIcon />
            <Link
              href="https://instagram.com/dougkulak"
              target={"_blank"}
              rel={"noopener"}
            >
              dougkulak
            </Link>
          </Stack>
        </Grid>
      </Grid>
      <Box pt={6} textAlign={"center"}>
        <Button
          size={"large"}
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
