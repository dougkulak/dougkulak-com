import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Box, Chip, Divider, Grid, Typography } from "@mui/material";

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
      <Box borderRadius={4} p={3} sx={{ backgroundColor: "white" }}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={`/img/${title.toLowerCase()}.png`}
            style={{ width: "150px" }}
            alt={title}
          />
        </Box>
        <Typography variant="h5">{title}</Typography>
        <Box mb={2} mt={1}>
          <Divider />
        </Box>
        {data.map((skillSet, i) => (
          <Chip
            key={i}
            label={skillSet.join(", ")}
            variant="outlined"
            sx={{
              backgroundColor: "#efefef",
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
    <>
      <SectionTitle>Skills</SectionTitle>
      <Grid container spacing={3} mb={2}>
        <Panel data={skills.frontend} title={"Frontend"} />
        <Panel data={skills.backend} title={"Backend"} />
        <Panel data={skills.devops} title={"DevOps"} />
      </Grid>
    </>
  );
}
