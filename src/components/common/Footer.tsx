import { Box, Grid, Typography } from "@mui/material";
import Container from "./Container";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        pt: 5,
        pb: 3,
        mt: "auto",
      }}
      component="footer"
    >
      <Container>
        <Grid
          pb={2}
          container
          spacing={2}
          columns={{
            xs: 1,
            sm: 2,
            md: 4,
          }}
        >
          <Grid item xs={1}>
            <Typography variant="h6">Contact & Support</Typography>
            <Typography variant="body2">FAQ</Typography>
            <Typography variant="body2">Help</Typography>
            <Typography variant="body2">Contact</Typography>
            <Typography variant="body2">Shipping costs</Typography>
            <Typography variant="body2">Delivery times</Typography>
            <Typography variant="body2">Payment</Typography>
            <Typography variant="body2">Returns</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">Our Story</Typography>
            <Typography variant="body2">Careers</Typography>
            <Typography variant="body2">Data and Privacy</Typography>
            <Typography variant="body2">Terms and Conditions</Typography>
            <Typography variant="body2">Cookie Settings</Typography>
            <Typography variant="body2">Disclaimer</Typography>
            <Typography variant="body2">Blog</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h6">Shop With Us</Typography>
            <Typography variant="body2">Login</Typography>
            <Typography variant="body2">Profile</Typography>
            <Typography variant="body2">Categories</Typography>
            <Typography variant="body2">Cart</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h6">Footer Heading</Typography>
            <Typography variant="body2">Footer content</Typography>
          </Grid>
        </Grid>
        <Typography variant="subtitle2" align="left" color="text.secondary">
          © 2024, Lukas Rappen
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
