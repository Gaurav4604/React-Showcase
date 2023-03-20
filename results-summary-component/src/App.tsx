import { Card, CardActionArea, CardContent, Container } from "@mui/material";

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
          <section className="summary">{/* <p>Hello there</p> */}</section>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
