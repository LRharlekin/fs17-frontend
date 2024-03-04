import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";

const FormInputCurrency = () => {
  const [value, setValue] = useState<number | string | null>("");

  return (
    <TextField
      label="Price"
      type="number"
      placeholder="0.00"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      InputProps={{
        endAdornment: <InputAdornment position="end">EUR</InputAdornment>,
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default FormInputCurrency;
