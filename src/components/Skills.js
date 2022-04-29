import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Chip, Grid } from "@mui/material";

const skills = [
  ["Next", "React", "Angular", "Node"],
  ["C#", ".NET", "Umbraco"],
  ["CakePHP", "Drupal", "WordPress"],
  ["Shopify", "OpenCart", "E-Commerce"],
  ["JavaScript", "Java", "Scala", "Play"],
  ["HTML5", "CSS3", "LESS/SASS"],
  ["jQuery", "Lo-Dash", "Underscore"],
  ["Webpack", "Browserify", "Jade"],
  ["Bootstrap", "Material UI", "Chakra UI"],
  ["NPM/Yarn", "Grunt/Gulp", "Monorepos"],
  ["XML", "JSON", "REST", "AJAX"],
  ["MySQL", "MSSQL", "MongoDB", "Firebase"],
  ["AWS", "EC2", "S3", "ELB", "RDS"],
  ["IAM", "Route53", "SES", "SQS"],
  ["Azure", "VMWare", "Hyper-V"],
  ["MacOS", "Windows", "Linux"],
  ["Ubuntu", "CentOS", "RedHat"],
  ["Apache", "Nginx", "IIS", "Express"],
  ["Jest", "Puppeteer", "Selenium"],
  ["Git", "GitHub", "Subversion", "TFS"],
  ["IntelliJ", "Resharper", "VSCode"],
  ["JIRA", "Confluence", "Bamboo"],
  ["NewRelic", "AlertLogic IDS/WAF"],
];

export function Skills() {
  return (
    <>
      <SectionTitle>Skills</SectionTitle>
      <Grid container spacing={1} mb={2}>
        {skills.map((skillSet, i) => (
          <Grid key={i} item>
            <Chip label={skillSet.join(", ")} variant="outlined" />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
