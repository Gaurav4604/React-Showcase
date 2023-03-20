import { Card, CardActionArea, CardContent, Container } from "@mui/material";

function App() {
  return (
    // <div
    //   className="App"
    //   style={{
    //     background: "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
    //     height: "100vh",
    //     width: "100vw",
    //   }}
    // >

    // </div>
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
        {/* <CardActionArea></CardActionArea> */}
      </Card>
    </Container>
  );
}

export default App;
