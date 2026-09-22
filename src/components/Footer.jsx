import { Link } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 5, sm: 8 },
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            py: { xs: 3, sm: 4 },
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: { xs: "center", sm: "center" },
            gap: 2,
            flexWrap: "wrap",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box>
            <Typography
              component={Link}
              to="/"
              variant="subtitle1"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                fontWeight: 700,
              }}
            >
              DEVLOG
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Modern web development & frontend technologies
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            © 2026 DEVLOG
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
