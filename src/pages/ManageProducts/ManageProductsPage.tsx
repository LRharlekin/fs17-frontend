import { Fragment as F } from "react";

import BackSpaceIcon from "@mui/icons-material/Backspace";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import Container from "../../components/common/Container";
import TabsNav from "../../components/manage-products/TabsNav";
import AddProductForm from "../../components/manage-products/AddProductForm";
import FormInputProductSearch from "../../components/common/forms/FormInputProductSearch";
import DeleteProductForm from "../../components/manage-products/DeleteProductForm";

const ManageProductsPage = () => {
  const tabs = [
    {
      title: "Add Product",
      icon: <LibraryAddIcon />,
      content: <AddProductForm />,
    },
    {
      title: "Edit Product",
      icon: <ModeEditIcon />,
      content: (
        <F>
          <FormInputProductSearch />
          <p>Edit product form here</p>
        </F>
      ),
    },
    {
      title: "Delete Product",
      icon: <BackSpaceIcon />,
      content: (
        <F>
          <FormInputProductSearch />
          <DeleteProductForm />
        </F>
      ),
    },
  ];

  return (
    <Container component="main">
      <h1>Manage Products</h1>

      <TabsNav tabs={tabs} />
    </Container>
  );
};

export default ManageProductsPage;
