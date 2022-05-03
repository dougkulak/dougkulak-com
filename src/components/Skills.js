import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Box, Chip, Container, Grid, Typography } from "@mui/material";

const skills = {
  frontend: [
    ["Next.js", "React", "Vue", "Angular"],
    ["Material UI", "Chakra UI", "Tailwind"],
    ["Bootstrap", "VanillaJS", "VanillaCSS"],
    ["Webpack", "Browserify", "Jade", "Liquid"],
    ["JavaScript", "HTML", "CSS", "SASS"],
    ["Flexbox", "CSS Grid", "Gasbag", "Tables"],
    ["Jest", "Puppeteer", "Selenium"],
    ["jQuery", "Lo-Dash", "Underscore"],
    ["IntelliJ", "Resharper", "VSCode"],
  ],
  backend: [
    ["Node.js", "C#/.NET", "PHP", "Java"],
    ["Laravel", "CakePHP", "Drupal", "WordPress"],
    ["Umbraco", "Sitecore", "Joomla"],
    ["Shopify", "OpenCart", "WooCommerce"],
    ["Apache", "Nginx", "IIS", "Express"],
    ["XML", "JSON", "REST", "AJAX"],
    ["MySQL", "SQL Server", "PostgreSQL"],
    ["MongoDB", "Firebase", "noSQL"],
    ["NPM/Yarn", "Lerna", "Monorepos"],
  ],
  devops: [
    ["AWS", "EC2", "S3", "EBS", "ELB"],
    ["Route53", "SQS", "SES", "IAM"],
    ["Azure", "DigitalOcean", "Linode"],
    ["Netlify", "Heroku", "CDN"],
    ["MacOS", "Windows", "Linux"],
    ["Ubuntu", "CentOS", "RedHat"],
    ["Git", "GitHub", "Subversion", "TFS"],
    ["JIRA", "Confluence", "Bamboo"],
    ["NewRelic", "AlertLogic IDS/WAF"],
  ],
};

function Panel({ data, title }) {
  return (
    <Grid item xs={12} md={4} textAlign={"center"}>
      <Box borderRadius={4} p={3} pt={6} sx={{ backgroundColor: "white" }}>
        <Box sx={{ textAlign: "center", display: { xs: "none", md: "block" } }}>
          <Box
            sx={{
              width: 150,
              height: 150,
              background: "linear-gradient(to bottom right, #ddd, #aaa)",
              borderRadius: 75,
              display: "inline-block",
            }}
          >
            <img
              src={`/img/${title.toLowerCase()}.png`}
              style={{ width: "150px" }}
              alt={title}
            />
          </Box>
        </Box>
        <Typography variant="h5" color={"primary"} pb={4}>
          {title}
        </Typography>
        {data.map((skillSet, i) => (
          <Chip
            key={i}
            label={skillSet.join(", ")}
            variant="filled"
            sx={{
              backgroundColor: "#fff",
              margin: 0.5,
            }}
          />
        ))}
      </Box>
    </Grid>
  );
}

export function Skills() {
  return (
    <Box
      sx={{
        p: 3,
        px: 0,
        py: 10,
        position: "relative",
        "&::before": {
          content: '""',
          backgroundColor: (theme) => theme.brandColors.light,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        },
        "&::after": {
          content: '""',
          backgroundImage: "url('/img/bg-skills.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
          zIndex: -1,
        },
      }}
    >
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <Grid container spacing={3} mb={2}>
          <Panel data={skills.frontend} title={"Frontend"} />
          <Panel data={skills.backend} title={"Backend"} />
          <Panel data={skills.devops} title={"DevOps"} />
        </Grid>
      </Container>
    </Box>
  );
}
