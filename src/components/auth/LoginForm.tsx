import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCredentials } from "../../redux/slices/authSlice";
import { useLoginMutation } from "../../redux/slices/authApiSlice";
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

// import FormInputPassword from "./FormInputPassword";

type LoginFormFields = {
  email: string;
  password: string;
};

const LoginForm = () => {
  /* component setup start */
  const [alertOpen, setAlertOpen] = useState(false);
  // const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  /* component setup end */

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

  const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
    try {
      // make POST request using login mutation, will return tokens
      const userData = await login({}).unwrap();
    } catch (error) {}

    /* try {
      // Simulate async form submission (POST request)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Simulate server-side error
      throw new Error();
      console.log("Form submitted");
      console.log(data);
      setAlertOpen(true);
    } catch (error) {
      setError("root", {
        message: "Login failed. Please try again.",
      });
      setAlertOpen(true);
    } */
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
