import React, { useState } from "react";

import { IconButton, InputAdornment, TextField } from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type Props = {
  id: string;
  label: string;
  ariaLabel?: string;
  sxProps?: object;
};

const FormInputPassword = ({
  id,
  label,
  ariaLabel = "toggle password visibility",
  sxProps,
}: Props) => {
  // const [showPassword, setShowPassword] = useState(false);

  // const handleClickShowPassword = () => {
  //   setShowPassword((show) => !show);
  // };

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  return (
    <TextField
      label={label}
      required
      type={"password"}
      // type={showPassword ? "text" : "password"}
      InputLabelProps={{
        shrink: true,
      }}
      id={id}
      sx={{ ...sxProps }}
      // InputProps={{
      //   endAdornment: (
      //     <InputAdornment position="end">
      //       <IconButton
      //         aria-label={ariaLabel}
      //         onClick={handleClickShowPassword}
      //         onMouseDown={handleMouseDownPassword}
      //         edge="end"
      //       >
      //         {showPassword ? <Visibility /> : <VisibilityOff />}
      //       </IconButton>
      //     </InputAdornment>
      // ),
      // }}
    />
  );
};

export default FormInputPassword;
