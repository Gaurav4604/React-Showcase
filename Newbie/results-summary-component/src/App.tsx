import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  SvgIcon,
} from "@mui/material";
import { ReactComponent as IconReaction } from "./assets/icons/icon-reaction.svg";
import { ReactComponent as IconMemory } from "./assets/icons/icon-memory.svg";
import { ReactComponent as IconVerbal } from "./assets/icons/icon-verbal.svg";
import { ReactComponent as IconVisual } from "./assets/icons/icon-visual.svg";
import SummaryBanner from "./components/SummaryBanner";

function App() {
  return (
    <Container id="root-container">
      <Card>
        <CardContent>
          <section className="result">
            <h1>Your Result</h1>
            <div className="score">
              <p className="score-text value">76</p>
              <p className="score-text total">of 100</p>
            </div>
            <h2 className="greeting">Great</h2>
            <h3 className="message">
              You scored higher than 65% of the people who have taken these
              tests.
            </h3>
          </section>
          <section className="summary">
            <h2>Summary</h2>
            <SummaryBanner
              icon={<IconReaction />}
              title="Reaction"
              score="80 / 100"
              variant="reaction"
            />
            <SummaryBanner
              icon={<IconMemory />}
              title="Memory"
              score="92 / 100"
              variant="memory"
            />
            <SummaryBanner
              icon={<IconVerbal />}
              title="Verbal"
              score="61 / 100"
              variant="verbal"
            />
            <SummaryBanner
              icon={<IconVisual />}
              title="Visual"
              score="72 / 100"
              variant="visual"
            />
            <Button>Continue</Button>
          </section>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
