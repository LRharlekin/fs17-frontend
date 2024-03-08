import React, { useState, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
// import type { ProductToDeleteType } from "../../misc/types";
// import type { ToString } from "../../misc/utilityTypes";

import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import SelectedProducts from "../common/forms/SelectedProducts";

// type DeleteProductFormFields = ToString<ProductToDeleteType>;
type DeleteProductFormFields = {
  productsToDelete: Array<string>;
  confirm: boolean | null;
};

const DeleteProductForm = () => {
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  const form = useForm<DeleteProductFormFields>({
    defaultValues: {
      productsToDelete: [],
      confirm: null,
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

  const onSubmit: SubmitHandler<DeleteProductFormFields> = async (data) => {
    try {
      /* Simulate async form submission (POST request) */
      await new Promise((resolve) => setTimeout(resolve, 2000));
      /* Simulate server-side error */
      // throw new Error();
      // console.log("Form submitted");
      // console.log(data);
      setAlertOpen(true);
    } catch (error) {
      setError("root", {
        message: "Deleting product failed. Please try again.",
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
      className="deleteProductForm"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Stack spacing={2} sx={{ py: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Delete Products
        </Typography>
        <SelectedProducts />
        <TextField
          label="Delete Products"
          required
          InputLabelProps={{
            shrink: true,
          }}
          error={errors.productsToDelete ? true : false}
          helperText={errors.productsToDelete?.message}
          {...register("productsToDelete", {
            required:
              "Use the search field above to select at least 1 product to delete.",
          })}
        />

        <FormControl
          required
          variant="outlined"
          error={errors.confirm ? true : false}
          {...register("confirm", {
            required:
              "Please confirm that you want to delete this product and all of its data (like images, product description, etc.).",
          })}
          component="fieldset"
        >
          <FormControlLabel
            control={<Checkbox color="error" />}
            label="I understand that this action is irreversible."
          />
          <FormHelperText>
            Please confirm to delete this product and all of its data (images,
            description, price, etc.).
          </FormHelperText>
        </FormControl>
        <Button
          type="submit"
          variant="outlined"
          color="error"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Deleting Products..." : "Delete Products"}
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
              {errors.root ? errors.root.message : "Product was deleted."}
            </Alert>
          </Collapse>
        )}
      </Stack>
    </form>
  );
};

export default DeleteProductForm;
