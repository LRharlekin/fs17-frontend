import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Stack } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FormInputFileUpload = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      pt={3}
      pb={3}
      sx={{
        border: 1,
        borderColor: "grey.400",
        borderRadius: 1,
      }}
    >
      <Button
        component="label"
        // role={undefined}
        variant="outlined"
        // tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        size="medium"
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
    </Stack>
  );
};

export { FormInputFileUpload };
