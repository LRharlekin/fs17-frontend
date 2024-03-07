import React from "react";
import { Chip } from "@mui/material";

type CategoryChipProps = {
  category: string | null;
};

const CategoryChip = ({ category }: CategoryChipProps) => {
  return (
    <Chip
      size="small"
      // color="primary"
      label={category}
      variant="outlined"
      sx={{
        px: 1,
        mb: 1,
      }}
    />
  );
};

export default CategoryChip;
