import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

type MoreDetailsButtonProps = {
  itemId: number;
};

const MoreDetailsButton = ({ itemId }: MoreDetailsButtonProps) => {
  const navigate = useNavigate();

  const handleMoreDetailsClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    navigate(`/product/${itemId}`);
  };

  return (
    <Button
      onClick={handleMoreDetailsClick}
      variant="contained"
      size="small"
      color="primary"
      sx={{
        flexGrow: 1,
      }}
    >
      More Details
    </Button>
  );
};

export default MoreDetailsButton;
