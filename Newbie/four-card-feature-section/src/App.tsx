import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import GridCard from "./GridCard";

import IconSupervisor from "./icon-supervisor.svg";
import IconTeamBuilder from "./icon-team-builder.svg";
import IconKarma from "./icon-karma.svg";
import IconCalculator from "./icon-calculator.svg";

function App() {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Stack id="app-root">
      <Typography variant="h1">Reliable, efficient delivery</Typography>
      <Typography variant="subtitle">Powered by Technology</Typography>
      <Typography variant="caption">
        Our Artificial Intelligence powered tools use millions of project data
        {breakpoint && <br />} points to ensure that your project is successful
      </Typography>

      <Stack id="grid-container">
        <GridCard
          cardTitle="Supervisor"
          cardSubtitle="Monitors activity to identify project roadblocks"
          imgSrc={IconSupervisor}
          dividerColor={theme.palette.custom.cyan}
          gridRow={breakpoint ? "2/4" : "1/2"}
          gridColumn={breakpoint ? "1" : "1"}
        />
        <GridCard
          cardTitle="Team Builder"
          cardSubtitle="Scans our talent network to create the optimal team for your project"
          imgSrc={IconTeamBuilder}
          dividerColor={theme.palette.custom.red}
          gridRow={breakpoint ? "1/3" : "2/3"}
          gridColumn={breakpoint ? "2" : "1"}
        />
        <GridCard
          cardTitle="Karma"
          cardSubtitle="Regularly evaluates our talent to ensure quality"
          imgSrc={IconKarma}
          dividerColor={theme.palette.custom.orange}
          gridRow={breakpoint ? "3/5" : "3/4"}
          gridColumn={breakpoint ? "2" : "1"}
        />
        <GridCard
          cardTitle="Calculator"
          cardSubtitle="Uses data from past projects to provide better delivery estimates"
          imgSrc={IconCalculator}
          dividerColor={theme.palette.custom.blue}
          gridRow={breakpoint ? "2/4" : "4/5"}
          gridColumn={breakpoint ? "3" : "1"}
        />
      </Stack>
    </Stack>
  );
}

export default App;
