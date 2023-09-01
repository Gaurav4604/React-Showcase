import Head from "next/head";
import Image from "next/image";
import { League_Spartan } from "next/font/google";
import ReviewCard from "@/components/ReviewCard";
import { Container, Typography } from "@mui/material";
import RatingPanel from "@/components/RatingPanel";
import rootTheme from "@/theme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Social proof section</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container component={"main"} id="main" disableGutters>
        <Container component={"section"} id="app-container" disableGutters>
          <Container component={"section"} id="description" disableGutters>
            <Container
              component={"section"}
              id="description-section"
              disableGutters
            >
              <Typography variant="h2">
                10,000+ of our users love our products.
              </Typography>
              <Typography variant="h4">
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
              </Typography>
            </Container>
            <Container component={"section"} id="rating-section" disableGutters>
              <RatingPanel
                gridRow="1/3"
                gridColumn="1/11"
                brand={"Reviews"}
                animationIndex={0}
              />
              <RatingPanel
                gridRow="4/6"
                gridColumn="2/12"
                brand={"Report Guru"}
                animationIndex={1}
              />
              <RatingPanel
                gridRow="7/9"
                gridColumn="3/13"
                brand={"BestTech"}
                animationIndex={2}
              />
            </Container>
          </Container>
          <ReviewCard
            name="Colton Smith"
            src="/images/image-colton.jpg"
            content="We needed the same printed design as the one we had ordered a week prior.
          Not only did they find the original order, but we also received it in time.
          Excellent!"
            gridRow="18/31"
            gridColumn="1/4"
            animationIndex={0}
          />
          <ReviewCard
            name="Irene Roberts"
            src="/images/image-irene.jpg"
            content="Customer service is always excellent and very quick turn around. Completely
          delighted with the simplicity of the purchase and the speed of delivery."
            animationIndex={1}
            gridRow="19/31"
            gridColumn="4/7"
          />
          <ReviewCard
            name="Anne Wallace"
            src="/images/image-anne.jpg"
            content="Put an order with this company and can only praise them for the very high
          standard. Will definitely use them again and recommend them to everyone!"
            animationIndex={2}
            gridRow="20/31"
            gridColumn="7/11"
          />
        </Container>
        <Image
          src={"/images/bg-pattern-top-desktop.svg"}
          fill
          priority
          id="bg-top"
          alt="bg-top"
          style={{
            position: "absolute",
            top: 0,
            left: "-70vw",
            zIndex: -1,
          }}
        />
        <Image
          src={"/images/bg-pattern-bottom-desktop.svg"}
          fill
          priority
          id="bg-bottom"
          alt="bg-bottom"
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: -1,
            left: "28vw",
          }}
        />
      </Container>
    </>
  );
}
