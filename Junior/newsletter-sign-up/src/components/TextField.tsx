"use client";
import React, { useState } from "react";
import { Button, TextField as MuiTextField, Typography } from "@mui/material";

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

  return (
    <>
      <Typography component={"label"} htmlFor="text-field" variant="caption">
        Email Address
      </Typography>
      <MuiTextField
        placeholder="email@company.com"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        id="text-field"
      />
      <Button variant="contained">
        <Typography variant="button">
          Subscribe to monthly newsletter
        </Typography>
      </Button>
    </>
  );
};

export default TextField;
