import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

const steps = [
  "Discovery",
  "Strategy",
  "UX/UI",
  "Design",
  "Development",
  "Support",
];

export function Introduction() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Container maxWidth={"md"}>
        <Typography gutterBottom>
          Hello, my name is Doug Kulak. I am a digital solutions architect with
          an extensive background in full-stack web development and responsive
          web design. I have end-to-end experience working for some of Orange
          County's premier digital advertising agencies and have built
          high-traffic and mission-critical applications for clients including
          Google, American Express, GE, YouTube, DreamWorks, and McDonald's. I
          scale comfortably from high-level architecture to hands-on, tactical
          execution and after 25 years, I continue to focus on what I enjoy
          most: Learning, improving, and making awesome websites.
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ pt: 10, pb: 0, textAlign: "center" }}
        >
          End-to-End Experience
        </Typography>
        <Box
          textAlign={"center"}
          p={{ xs: 0, md: 2 }}
          mt={3}
          mb={2}
          sx={{ border: "3px solid #222" }}
          borderRadius={4}
        >
          <Stack
            mt={2}
            mb={1}
            justifyContent={"center"}
            direction={{ xs: "column", md: "row" }}
            divider={
              isMobile ? (
                <Divider flexItem />
              ) : (
                <ArrowForwardIosIcon color={"secondary"} fontSize="medium" />
              )
            }
            spacing={2}
          >
            {steps.map((step) => (
              <Typography
                key={step}
                fontWeight="bold"
                fontSize={"large"}
                gutterBottom
                sx={{ color: (theme) => theme.brandColors.secondary }}
              >
                {step}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </>
  );
}
