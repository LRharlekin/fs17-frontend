import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCredentialsAndSave } from "./authActions";
// import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Alert,
  AlertTitle,
  Button,
  Collapse,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import type { AuthTokenResponse } from "../../misc/types";

type LoginFormFields = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [alertOpen, setAlertOpen] = useState(false);

  const navigate = useNavigate();
  const [login, { isLoading, error: loginError }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const form = useForm<LoginFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    setError,
    formState,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
    reset,
  } = form;

  const onSubmit: SubmitHandler<LoginFormFields> = async ({
    email,
    password,
  }) => {
    try {
      /* Simulate server-side error */
      // throw new Error();

      const userData: Awaited<Promise<AuthTokenResponse>> = await login({
        email,
        password,
      }).unwrap();

      const { access_token: token, refresh_token: refreshToken } = userData;

      dispatch(setCredentialsAndSave({ token, refreshToken, email }));

      reset();
      navigate("/profile");
    } catch (error) {
      console.error("Login failed. Please try again.");
      setError("root", {
        message: "Login failed. Please try again.",
      });
      setAlertOpen(true);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(undefined, { keepIsSubmitted: true });
    }
  }, [formState, reset]);

  return (
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2} sx={{ py: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Login Form
        </Typography>

        <TextField
          autoFocus
          label="Email"
          type="email"
          required
          InputLabelProps={{
            shrink: true,
          }}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
          {...register("email", {
            required: "Email address is required.",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Please enter a valid email address.",
            },
          })}
        />
        <TextField
          label="Password"
          required
          type="password"
          InputLabelProps={{
            shrink: true,
          }}
          error={errors.password ? true : false}
          helperText={errors.password?.message}
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
            maxLength: {
              value: 20,
              message: "Password must not exceed 20 characters.",
            },
          })}
        />

        <Button type="submit" variant="contained" disabled={isSubmitting}>
          {isSubmitting ? "Checking credentials..." : "Login"}
        </Button>
        {/* Server-side error / success alert */}
        {(errors.root || isSubmitted) && (
          <Collapse in={alertOpen}>
            <Alert
              severity={errors.root ? "error" : "success"}
              onClose={() => {
                setAlertOpen(false);
              }}
            >
              <AlertTitle>{errors.root ? "Error" : "Success"}</AlertTitle>
              {errors.root ? errors.root.message : "Signing in..."}
            </Alert>
          </Collapse>
        )}
      </Stack>
    </form>
  );
};

export default LoginForm;
