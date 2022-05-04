import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Box, Container, Grid, Typography } from "@mui/material";

const experiences = [
  {
    title: "Founder & CEO",
    company: "Kulak Consulting",
    startDate: "January, 2009",
    endDate: "Present",
    location: "Redding, CA",
    description:
      "Freelance. Dedicated to developing performant and secure solutions that improve user satisfaction and experience. Exceed company goals while defining and improving key performance indicators and metrics. Outstanding ability to problem-solve and work collaboratively. Available immediately for contract and/or permanent work.",
  },
  {
    title: "Senior Software Architect",
    company: "WorkWave, Inc.",
    startDate: "November, 2015",
    endDate: "November, 2017",
    location: "Holmdel, NJ",
    description:
      "Architected, designed, and developed new SaaS-based lead management and marketing automation software that generated over $1 million in annual recurring revenue in the first year. Analyzed, documented, and improved flagship software APIs with micro service-oriented architecture.",
  },
  {
    title: "Director of Technology",
    company: "Rhythm Interactive, Inc.",
    startDate: "May, 2013",
    endDate: "October, 2015",
    location: "Irvine, CA",
    description:
      "Led and managed an in-house team of talented software developers. Expanded department from 3 to 17 members in just under 2 years. Analyzed and estimated feasibility, costs, and timeline for all incoming development projects. Led and/or developed 10+ large-scale web development projects with budgets exceeding $1 million.",
  },
  {
    title: "Senior Web Developer",
    company: "The Buddy Group, Inc.",
    startDate: "May, 2011",
    endDate: "May, 2013",
    location: "Costa Mesa, CA",
    description:
      'Developed websites and applications for Fortune 100 companies including Google, YouTube, American Express, and McDonald\'s. Hosted routine, cross-department "lunch and learn" sessions to mentor and train curious or aspiring developers on exciting new technologies.',
  },
];

export function Experience() {
  return (
    <Container maxWidth={"md"}>
      <SectionTitle>Experience</SectionTitle>
      {experiences.map((experience) => (
        <Box key={experience.title} pb={1}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography variant="h6" component={"span"}>
                {experience.title}
              </Typography>{" "}
              &bull;{" "}
              <Typography
                variant="subtitle1"
                fontStyle="italic"
                fontWeight="normal"
                component={"span"}
              >
                {experience.company}
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
                {experience.startDate} &mdash; {experience.endDate}
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
                &bull; {experience.location}
              </Typography>
            </Grid>
            <Grid item mb={1}>
              <Typography variant="body2">{experience.description}</Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Container>
  );
}
