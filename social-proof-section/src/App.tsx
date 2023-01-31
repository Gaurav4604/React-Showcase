import { Stack } from "@mui/material";
import RatingBanner from "./components/RatingBanner";
import ReviewCard from "./components/ReviewCard";

function App() {
  return (
    <Stack alignItems="center" justifyContent="center">
      <RatingBanner rating={5} comment={"Rated 5 Stars in Reviews"} />
      <RatingBanner rating={5} comment={"Rated 5 Stars in Review Guru"} />
      <RatingBanner rating={5} comment={"Rated 5 Stars in Best Tech"} />
      <ReviewCard
        name="Colton Smith"
        verified
        avatar={require("./assets/image-colton.jpg")}
        comment="We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"
      />
    </Stack>
  );
}

export default App;
