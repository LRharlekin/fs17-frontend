import React, { useState, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import type { ProductToAddType } from "../../misc/types";
import type { ToString } from "../../misc/utilityTypes";

import {
  Alert,
  AlertTitle,
  Button,
  Collapse,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import CATEGORIES from "../../misc/constants/CATEGORIES";
import { FormInputFileUpload as ImageUploadField } from "../common/forms/FormInputFileUpload";

type AddProductFormFields = ToString<ProductToAddType>;

// title: string;
// price: string;
// description: string;
// images: string[];
// categoryId: string;

const AddProductForm = () => {
  const [alertOpen, setAlertOpen] = useState(false);

  const form = useForm<AddProductFormFields>({
    defaultValues: {
      title: "",
      price: "",
      description: "",
      images: [],
      categoryId: "5",
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
      // throw new Error();
      console.log("Form submitted");
      console.log(data);
      setAlertOpen(true);
    } catch (error) {
      setError("root", {
        message: "Sending product data failed. Please try again.",
      });
      setAlertOpen(true);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(undefined, { keepIsSubmitted: true });
    }
  }, [formState, reset, isSubmitSuccessful]);

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
        <TextField
          label="Product Title"
          required
          InputLabelProps={{
            shrink: true,
          }}
          type="text"
          // color="warning"
          error={errors.title ? true : false}
          helperText={errors.title?.message}
          {...register("title", {
            required: "Please enter the name of the new product.",
            minLength: {
              value: 2,
              message: "Product title must be at least 2 characters long.",
            },
            maxLength: {
              value: 30,
              message: "Exceeds maximum length for product title.",
            },
          })}
        />
        <TextField
          label="Price"
          required
          placeholder="0.00"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end">EUR</InputAdornment>,
          }}
          // color="warning"
          error={errors.price ? true : false}
          helperText={errors.price?.message}
          {...register("price", {
            required: "Please enter the price of the new product.",
            // minLength: {
            //   value: 2,
            //   message: "Product title must be at least 2 characters long.",
            // },
            // maxLength: {
            //   value: 30,
            //   message: "Exceeds maximum length for product title.",
            // },
          })}
        />
        <TextField
          label="Product Description"
          multiline
          minRows={4}
          maxRows={10}
          required
          InputLabelProps={{
            shrink: true,
          }}
          type="text"
          // color="warning"
          error={errors.description ? true : false}
          helperText={errors.description?.message}
          {...register("description", {
            required: "Please enter a product description.",
            minLength: {
              value: 10,
              message:
                "Product description must be at least 10 characters long.",
            },
            maxLength: {
              value: 800,
              message:
                "Maxium length for product description is 800 characters.",
            },
          })}
        />
        <TextField
          label="Product Category"
          required
          select
          InputLabelProps={{
            shrink: true,
          }}
          // color="warning"
          error={errors.categoryId ? true : false}
          helperText={errors.categoryId?.message}
          {...register("categoryId", {
            required: "Please choose a category for the new product.",
          })}
        >
          {CATEGORIES.map((category) => (
            <MenuItem key={`category-${category.id}`} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </TextField>

        {/* images: string[]; */}
        <Typography variant="body2">Images</Typography>
        <ImageUploadField />
        <Button type="submit" variant="contained" disabled={isSubmitting}>
          {isSubmitting ? "Sending New Product Data..." : "Save New Product"}
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
              {errors.root ? errors.root.message : "New product was created."}
            </Alert>
          </Collapse>
        )}
      </Stack>
    </form>
  );
};

export default AddProductForm;
