import { useAuthStore } from "../store/authStore";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";

function Header() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const logOutHandler = async () => {
    const success = await logout();

    if (success) {
      navigate("/login");
    }
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              flexShrink: 0,
            }}
          >
            DEVLOG
          </Typography>
          <Box
            sx={{
              flex: 1,
              maxWidth: 500,
            }}
          >
            <SearchBar />
          </Box>
          <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button onClick={logOutHandler} variant="outlined">
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
