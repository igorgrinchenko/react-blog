import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useArticlesStore } from "../store/articlesStore";

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function ArticleDetails() {
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const allArticles = useArticlesStore((state) => state.allArticles);
  const loading = useArticlesStore((state) => state.loading);
  const getArticles = useArticlesStore((state) => state.getArticles);
  const article = allArticles.find((article) => String(article.id) === id);

  useEffect(() => {
    if (!allArticles.length) {
      getArticles();
    }
  }, [allArticles.length, getArticles]);

  if (loading || !allArticles.length) {
    return (
      <Container maxWidth="md" sx={{ py: 10 }}>
        Loading...
      </Container>
    );
  }

  if (!article) {
    return (
      <Container maxWidth="md" sx={{ py: 10 }}>
        Article not found.
      </Container>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(comment);
  };

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Box>
        <Chip label={article.category} color="primary" sx={{ mb: 2 }} />

        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-1px",
            mb: 2,
          }}
        >
          {article.title}
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontWeight: 400,
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          {article.description}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          By {article.author} · {article.date}
        </Typography>

        <Box
          component="img"
          src={article.image}
          alt={article.title}
          sx={{
            width: "100%",
            height: { xs: 240, sm: 400 },
            objectFit: "cover",
            borderRadius: 2,
            mb: 5,
          }}
        />

        <Box>
          {article.content.split("\n\n").map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 4 }}>
          Comments ({article.comments.length})
        </Typography>

        <Stack spacing={2}>
          {article.comments.map((comment) => (
            <Paper
              key={comment.id}
              elevation={0}
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                  mb: 1,
                }}
              >
                <Typography variant="subtitle1" fontWeight={700}>
                  {comment.author}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {comment.date}
                </Typography>
              </Box>

              <Typography color="text.secondary">{comment.text}</Typography>
            </Paper>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: 6 }} />

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
    </Container>
  );
}

export default ArticleDetails;
