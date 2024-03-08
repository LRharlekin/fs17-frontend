import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import { Avatar, Chip, Stack } from "@mui/material";

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const selectedProductsData: readonly ChipData[] = [
  { key: 0, label: "Angular" },
  { key: 1, label: "jQuery" },
  { key: 2, label: "Polymer" },
  { key: 3, label: "Vue.js" },
  { key: 4, label: "Angular" },
  { key: 5, label: "jQuery" },
  { key: 6, label: "Polymer" },
  { key: 7, label: "Vue.js" },
];

const SelectedProducts = () => {
  const [selectedProducts, setSelectedProducts] =
    useState<readonly ChipData[]>(selectedProductsData);

  const handleDelete = (chipToDelete: ChipData) => {
    setSelectedProducts((products) =>
      products.filter((product) => product.key !== chipToDelete.key)
    );
  };

  return (
    <Stack
      component="ul"
      direction="row"
      flexWrap="wrap"
      pt={2}
      pl={1}
      pb={2}
      sx={{
        border: 1,
        borderColor: "grey.400",
        borderRadius: 1,
        listStyle: "none",
      }}
    >
      {selectedProducts.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip
              variant="outlined"
              color="primary"
              label={data.label}
              // onClick={() => {
              //   console.log("you clicked the chip");
              // }}
              // onDelete={handleDelete}
              onDelete={() => {
                handleDelete(data);
              }}
              avatar={<Avatar>{data.label.charAt(0).toUpperCase()}</Avatar>}
              // avatar={<Avatar src="/static/images/avatar/1.jpg" />}
            />
          </ListItem>
        );
      })}
    </Stack>
    // </Paper>
  );
};

export default SelectedProducts;
