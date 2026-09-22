import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const logOutHandler = () => {
    logout();
    setIsMenuOpen(false);
    navigate("/login");
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            gap: { xs: 1, sm: 2, md: 3 },
            minHeight: { xs: 64, sm: 72 },
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
              display: { xs: "none", sm: "block" },
            }}
          >
            <SearchBar />
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 1,
              flexShrink: 0,
            }}
          >
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>

            <Button onClick={logOutHandler} variant="outlined">
              Logout
            </Button>
          </Box>

          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen(true)}
            sx={{
              display: { xs: "inline-flex", sm: "none" },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              p: 1,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "min(88vw, 360px)",
              backgroundColor: "background.paper",
              borderLeft: "1px solid",
              borderColor: "divider",
            },
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            px: { xs: 3, sm: 4 },
            py: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 5,
            }}
          >
            <Typography
              component={Link}
              to="/"
              onClick={() => setIsMenuOpen(false)}
              sx={{
                color: "text.primary",
                textDecoration: "none",
                fontSize: "1.15rem",
                fontWeight: 550,
                letterSpacing: "1px",
              }}
            >
              DEVLOG
            </Typography>

            <IconButton
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
              sx={{
                p: 1,
                color: "text.secondary",
                "&:hover": {
                  color: "text.primary",
                  backgroundColor: "action.hover",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ mb: 5 }}>
            <SearchBar />
          </Box>

          <Box>
            <List disablePadding>
              <ListItemButton
                component={Link}
                to="/"
                onClick={() => setIsMenuOpen(false)}
                sx={{
                  px: 0,
                  py: 1.5,
                  borderRadius: 0,
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "primary.main",
                  },
                }}
              >
                <ListItemText
                  primary="Home"
                  slotProps={{
                    primary: {
                      fontSize: "1.05rem",
                      fontWeight: 600,
                    },
                  }}
                />
              </ListItemButton>

              <ListItemButton
                onClick={logOutHandler}
                sx={{
                  px: 0,
                  py: 1.5,
                  borderRadius: 0,
                  color: "text.secondary",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "text.primary",
                  },
                }}
              >
                <ListItemText
                  primary="Logout"
                  slotProps={{
                    primary: {
                      fontSize: "1.05rem",
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header;
