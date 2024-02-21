import React, { useState, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import type { ProductToAddType } from "../../misc/types";
import type { ToString } from "../../misc/utilityTypes";

import {
  Alert,
  AlertTitle,
  Button,
  Collapse,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

type AddProductFormFields = ToString<ProductToAddType>;
// {
//   title: string;
//   price: string;
//   description: string;
//   images: string[];
//   categoryId: string;
// }

const AddProductForm = () => {
  // const [alertOpen, setAlertOpen] = useState(false);

  const form = useForm<AddProductFormFields>({
    defaultValues: {
      title: "",
      price: "",
      description: "",
      images: [],
      categoryId: "",
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

  const onSubmit: SubmitHandler<AddProductFormFields> = async (data) => {
    try {
      /* Simulate async form submission (POST request) */
      await new Promise((resolve) => setTimeout(resolve, 2000));
      /* Simulate server-side error */
      throw new Error();
      console.log("Form submitted");
      console.log(data);
      // setAlertOpen(true);
    } catch (error) {
      setError("root", {
        message: "Sending message failed. Please try again.",
      });
      // setAlertOpen(true);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(undefined, { keepIsSubmitted: true });
    }
  }, [formState, reset]);

  return (
    <form
      className="addProductForm"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Stack spacing={2} sx={{ py: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Add Product
        </Typography>
      </Stack>
    </form>
  );
};

export default AddProductForm;
