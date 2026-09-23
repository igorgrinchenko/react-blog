import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

function CommentForm() {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(comment);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
        Add a comment
      </Typography>

      <TextField
        fullWidth
        multiline
        minRows={4}
        label="Your comment"
        placeholder="Write your comment..."
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ mt: 2 }}
        disabled={!comment.trim()}
      >
        Add comment
      </Button>
    </Box>
  );
}

export default CommentForm;
