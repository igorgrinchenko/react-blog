import { Component } from "react";
import { Alert, Box, Button, Container, Typography } from "@mui/material";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Unhandled UI error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="sm" sx={{ py: 10 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
              Something went wrong
            </Typography>
            <Alert severity="error" sx={{ mb: 3, textAlign: "left" }}>
              We couldn&apos;t display this page. Please try again.
            </Alert>
            <Button variant="contained" onClick={this.handleReload}>
              Reload page
            </Button>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
