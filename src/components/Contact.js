import React from "react";
import { SectionTitle } from "./SectionTitle";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import DownloadIcon from "@mui/icons-material/Download";

export function Contact() {
  return (
    <>
      <SectionTitle>Contact</SectionTitle>

      <Grid container mb={1}>
        <Grid item xs={12} sm={6} pr={2}>
          <Card variant={"outlined"}>
            <CardContent>
              <Typography variant={"subtitle1"}>dougkulak@gmail.com</Typography>
              <Typography variant={"h6"}>(530) 500-2220</Typography>
              <Typography variant={"caption"}>
                Monday-Friday, 9AM-5PM PST
              </Typography>
              <br />
              <Typography variant={"caption"}>Redding, California</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack direction="row" spacing={1} my={1}>
            <GitHubIcon />
            <Link
              href="https://github.com/dougkulak"
              target={"_blank"}
              rel={"noopener"}
            >
              dougkulak
            </Link>
          </Stack>
          <Stack direction="row" spacing={1} my={1}>
            <LinkedInIcon />
            <Link
              href="https://linkedin.com/in/dougkulak"
              target={"_blank"}
              rel={"noopener"}
            >
              dougkulak
            </Link>
          </Stack>
          <Stack direction="row" spacing={1} my={1}>
            <TwitterIcon />
            <Link
              href="https://twitter.com/dougkulak"
              target={"_blank"}
              rel={"noopener"}
            >
              dougkulak
            </Link>
          </Stack>
          <Stack direction="row" spacing={1} my={1}>
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
    </>
  );
}
