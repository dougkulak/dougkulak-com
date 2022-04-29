import { Layout } from "./components/Layout";
import { Introduction } from "./components/Introduction";
import { Experience } from "./components/Experience";
import { Box, Divider } from "@mui/material";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function SectionDivider() {
  return (
    <Box pt={1} pb={4}>
      <Divider />
    </Box>
  );
}

function App() {
  return (
    <Layout>
      <Introduction />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Contact />
    </Layout>
  );
}

export default App;
