import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Box, Grid, Typography } from "@mui/material";

const educations = [
  {
    title: "College of the Siskiyous",
    study: "General Education",
    date: "1997-1998",
    location: "Weed, CA",
  },
  {
    title: "Central Valley High School",
    study: "High School Diploma",
    date: "1997",
    location: "Shasta Lake, CA",
  },
  {
    title: "Stanford Educational Program for Gifted Youth",
    study: "Mathematics",
    date: "1997",
    location: "Palo Alto, CA",
  },
];

export function Education() {
  return (
    <>
      <SectionTitle>Education</SectionTitle>
      {educations.map((education) => (
        <Box key={education.title} pb={1}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography variant="h6" component={"span"}>
                {education.title}
              </Typography>{" "}
              &bull;{" "}
              <Typography
                variant="subtitle1"
                fontStyle="italic"
                fontWeight="normal"
                component={"span"}
              >
                {education.study}
              </Typography>{" "}
            </Grid>
            <Grid item mt={-1} mb={1}>
              <Typography
                variant="subtitle2"
                component={"span"}
                fontStyle="italic"
                fontWeight="normal"
                color={"primary"}
                gutterBottom
              >
                {education.date}
              </Typography>
              <Typography
                variant="subtitle2"
                component={"span"}
                fontStyle="italic"
                fontWeight="normal"
                color={"#999"}
                gutterBottom
              >
                {" "}
                &bull; {education.location}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
}
