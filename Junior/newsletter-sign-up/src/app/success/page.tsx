"use client";
import React, { useEffect } from "react";
import NextImage from "next/image";
import { Container, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button";

const Page = () => {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (
      !params.get("mail") ||
      (params.get("mail") && params.get("mail")?.length === 0)
    ) {
      router.replace("/signup");
    }
  }, []);

  return (
    <>
      {params.get("mail") !== undefined && (
        <Container component={"section"}>
          <NextImage
            alt="success-illustration"
            id="success-image"
            src={`/icon-success.svg`}
            width="0"
            height="0"
            priority
          />
          <Typography variant="h1">Thanks for subscribing!</Typography>
          <Typography variant="body2">
            A confirmation email has been sent to <b>{params.get("mail")}. </b>
            Please open it and click the button inside to confirm your
            subscription
          </Typography>
          <Button
            text="Dismiss message"
            id="success"
            onClick={() => router.replace("/signup")}
          />
        </Container>
      )}
    </>
  );
};

export default Page;
