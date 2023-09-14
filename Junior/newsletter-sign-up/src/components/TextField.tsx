"use client";
import React, { useEffect, useState } from "react";
import { TextField as MuiTextField, Stack, Typography } from "@mui/material";
import Button from "./Button";

const validateEmail = (email: string) => {
  return Boolean(
    email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );
};

const TextField = () => {
  const [mail, setMail] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (mail.length > 0) {
      setError(!validateEmail(mail));
    } else setError(false);
  }, [mail]);

  return (
    <>
      <Stack
        direction="row"
        sx={{ width: "100%" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          component={"label"}
          htmlFor="text-field"
          variant="subtitle1"
        >
          Email Address
        </Typography>
        {error && (
          <Typography variant="subtitle2" component={"label"}>
            Valid Email Required
          </Typography>
        )}
      </Stack>
      <MuiTextField
        error={error}
        placeholder="email@company.com"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        id="text-field"
      />
      <Button text={"Subscribe to monthly newsletter"} />
    </>
  );
};

export default TextField;
