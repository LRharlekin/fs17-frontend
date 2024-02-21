import BackSpaceIcon from "@mui/icons-material/Backspace";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import Container from "../../components/Container";
import TabsNav from "../../components/TabsNav";
import AddProductForm from "../../components/forms/AddProductForm";

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
      content: <p>Put "Edit Product Form" here</p>,
    },
    {
      title: "Delete Product",
      icon: <BackSpaceIcon />,
      content: <p>Put "Delete Product Form" here</p>,
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
