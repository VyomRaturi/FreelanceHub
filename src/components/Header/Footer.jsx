import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <footer >
    <Box
      component="footer"
      sx={{  backgroundColor: "#57acaf",
        p: 6,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Freelancer Hub is your one-stop solution. Our platform empowers
            companies to post jobs effortlessly, connect with top-notch freelancers,
            and unlock a diverse pool of talent to drive your projects forward.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Link href="https://www.linkedin.com/in/vyomraturi/" color="inherit" target="_blank">
            <Typography variant="body2" color="text.secondary">
              Vyom Raturi
            </Typography>
            </Link>
            <Link href="https://www.linkedin.com/in/itanvi-jain-/" color="inherit" target="_blank">
            <Typography variant="body2" color="text.secondary">
              Tanvi Jain
            </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/VyomRaturi/FreelanceHub" target="_blank">
             FreelancerHub
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
    </footer>
  );
}