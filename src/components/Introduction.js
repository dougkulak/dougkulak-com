import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SectionTitle } from "./SectionTitle";

const steps = [
  "Discovery",
  "Strategy",
  "UX/UI",
  "Design",
  "Develop",
  "Support",
];

export function Introduction() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <SectionTitle>Overview</SectionTitle>
      <Typography gutterBottom>
        I am a detail-oriented digital solutions architect with an extensive
        background in full-stack web development and web design. I have
        end-to-end experience working for some of Orange County's premier
        digital advertising agencies and have built high-traffic and
        mission-critical applications for clients including Google, American
        Express, GE, YouTube, Dreamworks, and McDonald's.
      </Typography>
      <Box
        sx={
          isMobile
            ? {
                textAlign: "center",
              }
            : {
                textAlign: "left",
              }
        }
      >
        <Stack
          mt={2}
          mb={1}
          direction={{ xs: "column", md: "row" }}
          divider={
            isMobile ? (
              <Divider flexItem />
            ) : (
              <ArrowForwardIosIcon color={"secondary"} fontSize="small" />
            )
          }
          spacing={1}
        >
          {steps.map((step) => (
            <Typography key={step} color="primary" fontWeight="bold">
              {step}
            </Typography>
          ))}
        </Stack>
      </Box>
    </>
  );
}
