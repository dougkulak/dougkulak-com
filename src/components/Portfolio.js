import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const projects = [
  {
    name: "GE Energy Financial Services",
    subtitle: "Responsive Website Rebuild",
    image: "/img/project-ge.png",
    bg: "/img/bg-ge.jpg",
    url: "https://geenergyfinancialservices.com",
    heading: "A truly energizing project",
    description:
      "While working for Orange County, California based digital marketing agency, Rhythm, Doug Kulak led the team to build and launch one of General Electric's first responsive websites. Deciding on CakePHP as our backend framework, Doug architected and developed the application and data layers while assisting a small team of front-end developers on a user friendly, cross-browser-compatible interface.",
    builtWith:
      "Built with CakePHP, jQuery, Modernizr, Selectivizr, RespondJS, Zurb Foundation, HTML5, CSS, Google Sheets",
  },
  {
    name: "Irvine Company Retail",
    subtitle: "Responsive Website Rebuild",
    image: "/img/project-irvine.png",
    bg: "/img/bg-irvine.jpg",
    url: "https://shopirvinecompany.com",
    heading: "Where luxury meets technology",
    description:
      "While working for Orange County, California based digital marketing agency, Rhythm, Doug Kulak led the team to develop a fully responsive website for The Irvine Company's retail division, powered by the open-source ASP.NET CMS Umbraco and AngularJS. Rhythm's Senior Art Director, Chris Guadarrama, created a truly stunning and responsive design that we modularized with a flexible widget system, allowing The Irvine Company to extend and enhance the site in just about any way imaginable. The launch was one of the smoothest The Irvine Company had seen and they had nothing but great things to say about us and their new website.",
    builtWith:
      "Built with ASP.NET, C#, Umbraco CMS, Bootstrap, AngularJS, jQuery, HTML5, CSS3, Hangfire, Pivotal, Google Tag Manager",
  },
  {
    name: "SmartStop Self Storage",
    subtitle: "Responsive Website Rebuild",
    image: "/img/project-smartstop.jpeg",
    bg: "/img/bg-smartstop.jpg",
    url: "https://smartstopselfstorage.com",
    heading: "New digital leaders in the self-storage space ",
    description:
      "While working for Orange County, California based digital marketing agency, Rhythm, Doug Kulak assembled and lead a team of developers to launch SmartStop's first responsive and mobile-first website. The site immediately propelled SmartStop's online experience to the top of the list within the industry, outshining competitor's sites that had fallen behind with the times. We built the site on top of a custom CakePHP CMS we had written, which was heavily inspired by the flexibility of the open source ASP.NET CMS, Umbraco.",
    builtWith:
      "Built with CakePHP, Custom CMS, Bootstrap SASS, Modernizr, jQuery, AngularJS, HTML5, CSS3, Google Tag Manager",
  },
  {
    name: "Francisco Bread",
    subtitle: "Responsive Website Rebuild",
    image: "/img/project-francisco.jpeg",
    bg: "/img/bg-francisco.jpg",
    url: "https://franciscobread.com",
    heading: "Delivering the recipe for success",
    description:
      "While working for Orange County, California based digital marketing agency, Rhythm, Doug Kulak architected and developed Bimbo Bakeries' first responsive website with Drupal. The site showcases their products and features them in a variety of beautifully photographed recipes, enticing visitors to recreate them at home. The launch was a huge success and the site became an example of how all of Bimbo's brand websites should be.",
    builtWith: "Built with PHP, Drupal, Zen, jQuery, Selectivizr, HTML5, CSS3",
  },
  {
    name: "LRE Water",
    subtitle: "Responsive Website Rebuild",
    image: "/img/project-lre.jpg",
    bg: "/img/bg-lre.jpg",
    url: "https://lrewater.com",
    heading: "A refreshing rebuild",
    description:
      "While consulting for Denver, Colorado based water engineering firm, Leonard Rice Engineers, Doug Kulak helped execute marketing's vision and led the development of a modern, Jamstack-based company website. All of the content and media is fully manageable via an open-source Headless CMS & API, Directus.",
    builtWith: "Built with Next.js, Directus CMS, Material UI, JavaScript",
  },
];

function ProjectHero({ title, bg, subtitle }) {
  return (
    <Box
      sx={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        position: "relative",
      }}
    >
      <Box
        py={30}
        px={2}
        sx={{ zIndex: 100, position: "relative", textAlign: "center" }}
      >
        <Typography variant={"h2"} color={"white"}>
          {title}
        </Typography>
        <Typography
          variant={"subtitle1"}
          color={"#999"}
          textTransform={"uppercase"}
          letterSpacing={4}
          mt={3}
        >
          {subtitle}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(32,26,22,0.7)",
          zIndex: 99,
        }}
      />
    </Box>
  );
}

function ProjectInfo({ title, description, builtWith, url }) {
  return (
    <Container maxWidth={"md"}>
      <Box py={5} textAlign={"center"}>
        <Typography variant={"h4"} pt={6} pb={3}>
          {title}
        </Typography>
        <Typography variant={"body1"} pb={3}>
          {description}
        </Typography>
        <Typography variant={"subtitle2"} fontStyle={"italic"} mb={4}>
          {builtWith}
        </Typography>
        <Button
          variant={"outlined"}
          href={url}
          target={"_blank"}
          rel={"noopener"}
        >
          Visit Website
        </Button>
      </Box>
    </Container>
  );
}

function ProjectImage({ src, alt }) {
  return (
    <Container>
      <Box py={10} pt={5}>
        <img src={src} width={"100%"} alt={alt} />
      </Box>
    </Container>
  );
}

function Project({ project }) {
  return (
    <Box>
      <ProjectHero
        title={project.name}
        subtitle={project.subtitle}
        bg={project.bg}
      />
      <ProjectInfo
        title={project.heading}
        description={project.description}
        builtWith={project.builtWith}
        url={project.url}
      />
      <ProjectImage src={project.image} alt={project.name} />
    </Box>
  );
}

export function Portfolio() {
  return (
    <>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </>
  );
}
