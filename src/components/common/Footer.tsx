import Box from "@mui/material/Box";
import Container from "./Container";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        py: 5,
        mt: "auto",
      }}
      component="footer"
    >
      <Container>Footer</Container>
    </Box>
  );
};

export default Footer;
