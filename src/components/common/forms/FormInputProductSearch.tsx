import React /* , { useState } */ from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const ProductSearch = () => {
  // const [query, setQuery] = useState("");

  const handleClickProductSearch = () => console.log("Product search clicked");

  const handleMouseDownProductSearch = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      variant="filled"
      label="Product"
      placeholder="Enter product name or product ID"
      InputLabelProps={{
        shrink: true,
      }}
      id="product-search-input"
      sx={{ m: 1, width: "45ch" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="search for product in database"
              onClick={handleClickProductSearch}
              onMouseDown={handleMouseDownProductSearch}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default ProductSearch;
