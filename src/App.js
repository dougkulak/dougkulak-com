import { Layout } from "./components/Layout";
import { Introduction } from "./components/Introduction";
import { Experience } from "./components/Experience";
import { Box, Container } from "@mui/material";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";
import { Hero } from "./components/Hero";
import { Outro } from "./components/Outro";

function Section({ children }) {
  return (
    <Box sx={{ flexGrow: 1, p: 3, px: 0, py: 10 }}>
      <Container p={0}>{children}</Container>
    </Box>
  );
}

function SectionInverted({ children }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        px: 0,
        py: 20,
        backgroundColor: (theme) => theme.brandColors.dark,
        color: (theme) => theme.brandColors.light,
      }}
    >
      <Container p={0}>{children}</Container>
    </Box>
  );
}

function SectionAlternate({ children }) {
  return (
    <Box
      sx={{
        p: 3,
        px: 0,
        py: 10,
        backgroundColor: (theme) => theme.brandColors.light,
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
}

function SectionHighlight({ children }) {
  return (
    <Box
      sx={{
        p: 3,
        px: 0,
        py: 10,
        backgroundColor: (theme) => theme.brandColors.primary,
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
}

function App() {
  return (
    <Layout>
      <Hero />
      <SectionInverted>
        <Introduction />
      </SectionInverted>
      <Skills />
      <Section>
        <Experience />
      </Section>
      <SectionAlternate>
        <Education />
      </SectionAlternate>
      <Section>
        <Contact />
      </Section>
      <SectionHighlight>
        <Resume />
      </SectionHighlight>
      <Outro />
    </Layout>
  );
}

export default App;
