import { useState } from "react";
import { useArticlesStore } from "../store/articlesStore";
import { Box, Typography, TextField, Button } from "@mui/material";

function CommentForm({ article }) {
  const [commentValue, setCommentValue] = useState("");

  const setComment = useArticlesStore((state) => state.setComment);
  const loading = useArticlesStore((state) => state.loading);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newComment = {
      id: article.comments.length + 1,
      author: "Ihor",
      text: commentValue.trim(),
      date: new Date().toISOString(),
    };

    const success = await setComment(article.id, newComment);

    if (success) {
      setCommentValue("");
    }
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
        value={commentValue}
        onChange={(event) => setCommentValue(event.target.value)}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ mt: 2 }}
        disabled={!commentValue.trim() || loading}
      >
        Add comment
      </Button>
    </Box>
  );
}

export default CommentForm;
